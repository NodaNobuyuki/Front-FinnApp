
import api from "./api";



type jsonProps = {
    name: string;
    email: string;
    password: string;
};


const Json = async ({name, email, password}:jsonProps) =>{

        const user = {name, email, password}
        try {
            validationInput({name, email, password})
            const response = await api.post("/users", user);
            console.log("resposta do back: " + response.data + "e essa: " + response.headers + "e tambem : " + response.status)
        } catch(error){
            console.log(error)
        }
}

const validationInput = ({ name, email, password }: jsonProps):boolean =>{

    if (!(nameRegex.test(name))){
        throw {name : "NameError", message: "Campo de nome invalido"}
    } else if (!(emailRegex.test(email))){
        throw {name : "EmailError", message: "Campo de email invalido"}
    }else if(!(passwordRegex.test(password))){
        throw {name : "PasswordError", message: "Campo de senha invalido"}
    } else{
        return true
    }
}


export default Json
