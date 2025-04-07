import { emailRegex, nameRegex, passwordRegex } from "@/constants/nameRegex";
import api from "./api";



type jsonProps = {
    name: string;
    email: string;
    password: string;
};



const sendJson = async ({name, email, password}:jsonProps) =>{
    if (validationInput({name, email, password}) == true){

        const user = createJson({name, email, password})
        try {
            const response = await api.post("/users", user);
            console.log("resposta do back: " + response.data + "e essa: " + response.headers + "e tambem : " + response.status)
        } catch(error){
            console.log(error)
        }
        console.log(user)

    }else{
        console.log("erro")
    }
}

const validationInput = ({ name, email, password }: jsonProps):boolean =>{

    if (!(nameRegex.test(name))){
        return false
    } else if (!(emailRegex.test(email))){
        return false
    }else if(!(passwordRegex.test(password))){
        return false
    } else{
        return true
    }
}

const createJson = ({ name, email, password }: jsonProps) => {
    return (
        {
            name,
            email,
            password
        }
    )
};

export default sendJson;