import React, { useState } from "react"
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, View,  } from "react-native"
import ButtonGeneric from "../components/ButtonGeneric"
import InputGeneric from "../components/InputGeneric"
import COLORS from "../constants/COLORS"
import sendJson from "../services/createUser"



const SignupScreen = () =>{

            


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlePress = ()=>{

        const mockUser = {
            name: "Teste",
            email: "teste@email.com",
            password: "senhaForte123!"
          };
        sendJson(mockUser)
    }

    return(

        

        <SafeAreaView style={{flex:1}}>

            <View style={styles.header}>

                <Text style={styles.h1} > Crie uma conta </Text>

                <Text style={styles.h2} > nome </Text>
                <InputGeneric placeholder="Digite seu nome" secureTextEntry={false}></InputGeneric>

                <Text style={styles.h2} > Email </Text>
                <InputGeneric placeholder="Digite seu email" secureTextEntry={false}></InputGeneric>

                <Text style={styles.h2} > Senha </Text>
                <InputGeneric placeholder="Digite sua senha" secureTextEntry={true}></InputGeneric>

                <Text style={styles.h2} > Confirme sua senha </Text>
                <InputGeneric placeholder="Confirme sua senha" secureTextEntry={true}></InputGeneric>

                <ButtonGeneric pressEvent={handlePress} textLabel="Continuar" />

            </View>

            <View style={styles.footer}>

                <Text style={styles.h3}> Ou se conecte com </Text>

                <View style={styles.footerLogos}>
                    <Image source={require("../assets/images/logos_facebook.png")} />

                    <Image source={require("../assets/images/logos_facebook.png")} />

                    <Image source={require("../assets/images/logos_facebook.png")} />
                </View>


                <ButtonGeneric pressEvent={handlePress} textLabel="Continuar" 
                style={{
                    backgroundColor:COLORS.primary,
                    borderRadius:10,
                    fontSize:30,
                    width:"100%",
                    textAlign:"center",
                    fontWeight: "bold",
                }}
                />

                <Text>Após clicar em continuar você concorda com nossos Termos de uso e Políticas de privacidade.</Text>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        padding:8,
        flex:2

    },

    headerText:{
        alignItems:"center",
        
    },

    h1: {
        fontSize: 24,
        fontWeight: "bold"
    },

    h2: {
        fontWeight: "bold",
        paddingBottom: 10,
        paddingTop: 10
    },

    h3:{
        fontSize:28,
        fontWeight:"bold"
    },

    footer:{
        backgroundColor: "red",
        padding:10,
        alignItems:"center",
        width:"100%",
        flex:1
        
    },

    footerLogos:{
        flexDirection:"row",
        gap:"20%"
    }
})
export default SignupScreen