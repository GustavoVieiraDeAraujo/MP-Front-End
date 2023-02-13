import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import {api} from "../services/api"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    let navigate = useNavigate()
    const login = async (email, password) => {
        try{
            const response = await api.get('/user/login', {params: {email, password}})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common["X-Admin-Token"] = response.data.authentication_token
                api.defaults.headers.common["X-Admin-Email"] = response.data.email
                Cookie.set('mp.user', JSON.stringify(response.data), {expires: 1})
                window.alert("Usuário logado com sucesso!")
                navigate("/minhaconta")
                
            }
        } catch(err) {
            window.alert(err)
        }
    }

    useEffect(() => {
        const retrievedUser = Cookie.get('mp.user');
        if(retrievedUser){
            let parsedUser = JSON.parse(retrievedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-Admin-Token"] = parsedUser.authentication_token
            api.defaults.headers.common["X-Admin-Email"] = parsedUser.email
        }
    }, [])

const logout = async () => {
    if(window.confirm("Deseja sair de sua conta?")){
        setUser({});
        Cookie.remove('mp.user');
    }
}
return (
    <UserContext.Provider value={{login, user,setUser, logout}}>
        {children}
    </UserContext.Provider>
)
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}
