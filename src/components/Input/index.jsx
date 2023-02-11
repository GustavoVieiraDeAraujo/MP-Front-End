import { Container } from "./styles"

const Input = ({onChangeFunction, placeholder, ...props}) => {
    return (
        <Container>
            <input onChange= {e => {return onChangeFunction(e.target.value)}} placeholder={placeholder} {...props}/>
        </Container>
    )
}

export default Input;