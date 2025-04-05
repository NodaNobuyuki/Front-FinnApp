import ButtonGeneric from "@/components/ui/ButtonGeneric"
import TextInputGeneric from "@/components/ui/TextInputGeneric";
import sendJson from "@/services/createUser";

import { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native"

const signupScreen = ()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handlePress = ()=>{
        sendJson({name, email, password})
    }

    return (
    <View style={style.container}>
        <TextInputGeneric placeholder="Insira seu nome" value={name} typing={setName} password = {false} />
        <TextInputGeneric placeholder="Email" value={email} typing={setEmail} password = {false} />
        <TextInputGeneric placeholder="Senha" value={password} typing={setPassword} password = {true}/>
        <ButtonGeneric press={handlePress}/>
    </View>
    ) 
}

const style = StyleSheet.create({
    container:{
        justifyContent: "center",
        padding: 40
    }
});
StyleSheet
export default signupScreen;