import ButtonGeneric from "@/components/ui/ButtonGeneric"
import TextInputGeneric from "@/components/ui/TextInputGeneric";
import { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native"

const signupScreen = ()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handlePress = ()=>{
        Alert.alert(email)
    }

    return (
    <View style={style.container}>
        <TextInputGeneric placeholder="Insira seu nome" value={name} typing={setName}/>
        <TextInputGeneric placeholder="Email" value={email} typing={setEmail}/>
        <TextInputGeneric placeholder="Senha" value={password} typing={setPassword}/>
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