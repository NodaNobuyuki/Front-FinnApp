import React, { useState } from "react"
import { Alert, Image, Pressable, StyleSheet, Text, View,  } from "react-native"
import ButtonGeneric from "../components/ButtonGeneric"
import InputGeneric from "../components/InputGeneric"
import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from "../constants/COLORS"
import { withDecay } from "react-native-reanimated"
import Json from "../services/createUser"




const handlePress = ()=>{

    const mockUser = {
        name: "Teste",
        email: "teste@email.com",
        password: "senhaForte123!"
      };
    Json(mockUser)
}


const Home = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlePress = ()=>{

        Alert.alert("oi")
        
        // const mockUser = {
        //     name: "Teste",
        //     email: "teste@email.com",
        //     password: "senhaForte123!"
        //   };
        // sendJson(mockUser)
    }

    return(

        <SafeAreaView style={{flex:1}}>

            <View style={styles.header}>

                <View style={styles.headerText}>

                    <Image source={require("../assets/images/logos_facebook.png")} />

                    <Text style={styles.h1} > Bem-vindo de volta! </Text>
                    <Text style={styles.h1} > Acessar conta </Text>

                </View>


                <Text style={styles.h2} > Email </Text>
                <InputGeneric 
                placeholder="Digite seu Email" 
                onChangeText={setEmail} 
                value={email} 
                secureTextEntry={false} >
                </InputGeneric>

                <Text style={styles.h2} > Senha </Text>
                <InputGeneric 
                placeholder="Digite sua senha"
                onChangeText={setPassword} 
                value={password} 
                secureTextEntry={true} >
                </InputGeneric>

                <ButtonGeneric 
                pressEvent={handlePress} 
                textLabel="Esqueci minha senha" />

                <ButtonGeneric 
                pressEvent={handlePress} 
                textLabel="Continuar" 
                style={{backgroundColor: "black", 
                        color:"white",
                        textAlign:"center",
                        borderRadius:10,
                        fontSize:30
                    }}
                />

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

export default Home