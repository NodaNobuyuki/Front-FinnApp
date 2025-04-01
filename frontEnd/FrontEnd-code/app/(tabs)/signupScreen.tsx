import ButtonGeneric from "@/components/ui/ButtonGeneric"
import TextInputGeneric from "@/components/ui/TextInputGeneric";
import { StyleSheet, View } from "react-native"

// export default function signupScreen(){
//     return (
//         <View>
//             <ButtonGeneric/>
//             <TextInputGeneric placeholder="caralho"/>
//         </View>
//     )
// }

const signupScreen = ()=>{
    
    return (
    <View style={style.container}>
        <TextInputGeneric placeholder="Insira seu nome"/>
        <TextInputGeneric placeholder="Email"/>
        <TextInputGeneric placeholder="Senha"/>
        <ButtonGeneric/>
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