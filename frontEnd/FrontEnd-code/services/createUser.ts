import axios from "axios";
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
            const response = await api.post("/user", user);
            console.log("foi")
        } catch(error){
            console.log(error)
        }
        console.log(user)

    }else{
        console.log("erro")
    }
}

const validationInput = ({ name, email, password }: jsonProps):boolean =>{
    if ((name.length>=2) && (email.includes("@") && email.includes(".")) && (password.length>=8)) {
        return true
    }else{
        return false
    }
}

const createJson = ({ name, email, password }: jsonProps) => {
    return (
        JSON.stringify({name, email, password})
    )
};

export default sendJson;