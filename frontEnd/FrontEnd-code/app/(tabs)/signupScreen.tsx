import ButtonGeneric from "@/components/ui/ButtonGeneric"
import TextInputGeneric from "@/components/ui/TextInputGeneric";
import { colors } from "@/constants/Colors";
import sendJson from "@/services/createUser";

import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const signupScreen = ()=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handlePress = ()=>{

        const mockUser = {
            name: "Teste",
            email: "teste@email.com",
            password: "senhaForte123!"
          };
        sendJson(mockUser)
    }

    return (

        <SafeAreaView >

            <View style={styles.containerViewHeader}>
                <Text>Crie uma conta</Text>

                <Text>Nome</Text>
                <TextInputGeneric placeholder="Insira seu nome" value={name} typing={setName} password = {false} />

                <Text>Email</Text>
                <TextInputGeneric placeholder="Email" value={email} typing={setEmail} password = {false} />

                <Text>Senha</Text>
                <TextInputGeneric placeholder="Senha" value={password} typing={setPassword} password = {true}/>

                <Text>Ou se conecte com</Text>

            </View>

            <View style={styles.containerViewFooter}>

                <ButtonGeneric press={handlePress} titulo="continue" />

            </View>

        </SafeAreaView>

    ) 
}

const styles = StyleSheet.create({
    containerViewHeader:{
        justifyContent: "center",
        padding: 40,
        backgroundColor: colors.primary
    },
    textLabel:{
        color:"black"
    },
    errorLabel:{
        color:"green"
    },

    containerViewFooter:{
        padding:40,
        backgroundColor: colors.secundary
    }

});

export default signupScreen;