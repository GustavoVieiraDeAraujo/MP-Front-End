import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import {api} from "../services/api"
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

    const UserProvider = ({children}) => {
        const [user, setUser] = useState({});

        
        const login = async (email, password) => {
            try{
            const resposne = await api.get('/user/login', {params: {email, password}})

            if(resposne.data){
                setUser(response.data)
                api.defaults.headers.common["X-User-Token"] = reponse.data.authentication_token
                api.defaults.headers.common["X-User-Email"] = reponse.data.email
                Cookie.set('mp.user', JSON.stringify(reponse.data), {expire:1})
            }
        }
        catch(e){
            alert(e);
        }
    }

    useEffect(() => {
        const retrivedUser = Cookie.get('mp.user');
        if(retrivedUser){
            let parsedUser = JSON.parse(retrivedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-User-Token"] = reponse.data.authentication_token
            api.defaults.headers.common["X-User-Email"] = reponse.data.email
        }
    }, [] )

    const logout = async () => {
        if(window.confirm("Deseja sair de sua conta?")){
            setUser({});
            Cookie.remove('mp.user');
        }
    }
    return(
        <UserContext.Provider value={(login, user, logout)}>
            {children}
        </UserContext.Provider>
    )
}
const useUserContext = () => {
    const contex = useContext(UserContext);
    return contex;
}

export {useUserContext, UserProvider}
