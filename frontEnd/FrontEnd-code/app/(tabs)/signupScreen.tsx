
import ButtonGeneric from "@/components/ui/ButtonGeneric"
import { ShowOnIos } from "@/components/ui/ShowOn";
import TextInputGeneric from "@/components/ui/TextInputGeneric";
import { colors } from "@/constants/Colors";
import sendJson from "@/services/createUser";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View, Image, TextInput } from "react-native"
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

        <SafeAreaView style = {{flex:1}} >

            <View style={styles.containerViewHeader}>

                <View style={styles.containerIcons} >      
                    <Image source={require("../../assets/images/logoApple.png")} />
                </View>

                <View style={styles.containerTxtView}>
                    <Text style={styles.guideText}>Crie uma conta</Text>
                </View>
                

                <View>
                    <Text style={styles.textInputStyle}>Nome</Text>
                    <TextInputGeneric placeholder="Insira seu nome" value={name} typing={setName} password = {false} />

                    <Text style={styles.textInputStyle}>Email</Text>
                    <TextInputGeneric placeholder="Email" value={email} typing={setEmail} password = {false} />

                    <Text style={styles.textInputStyle}>Senha</Text>
                    <TextInputGeneric placeholder="Senha" value={password} typing={setPassword} password = {true}/>

                    <Text style={styles.textInputStyle}>Confirme sua senha</Text>
                    <TextInputGeneric placeholder="Confirme sua senha" value={password} typing={setPassword} password = {true}/>

                </View>

            </View>

            <View style={styles.containerViewFooter}>
                <View style={styles.containerViewFooter}>
                    <Text style={styles.guideText}>
                        Ou se conecte com
                    </Text>
                    <View style={styles.containerIcons}>
                        
                        <ShowOnIos>
                            <Image source={require("../../assets/images/logoApple.png")}
                            />
                        </ShowOnIos>
                        
                        
                        <Image
                        source={require("../../assets/images/logoGoogle.png")}/>

                        <Image source={require("../../assets/images/logoFacebook.png")}/>
                        
                    </View>
                </View>

                <View>

                    <View>

                        <Image />

                    </View>

                    <ButtonGeneric press={handlePress} titulo="continue" />
                    <Text style={styles.textPolicyStyle}>Após clicar em continuar você concorda com nossos Termos de uso e Políticas de privacidade.</Text>

                </View>
                

            </View>

        </SafeAreaView>

    ) 
}

const styles = StyleSheet.create({
    containerViewHeader:{
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
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        padding:40,
        backgroundColor: colors.secundary
    },

    containerIcons:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    containerTxtView:{
        alignItems:"center",
    },

    textInputStyle:{
        fontWeight:"bold",
        paddingTop:6,
        paddingBottom:4
    },

    guideText:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:4
    },

    textPolicyStyle:{
        textAlign:"center",
        fontSize:10,
    }
});

export default signupScreen;