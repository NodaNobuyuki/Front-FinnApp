import { StyleSheet, Text, TextInput } from "react-native";
import COLORS from "../constants/COLORS";

type InputGenericProps = {
    placeholder: string
    onChangeText: (text:string) => void
    value: string
    secureTextEntry: boolean
    isNumeric?: boolean
    keyboardType?: 'numeric' | 'default'
}



const InputGeneric = ( { 
    placeholder, 
    onChangeText, 
    value, 
    secureTextEntry, 
    isNumeric, 
    keyboardType 
}: InputGenericProps) =>{

    const handleChange = (text:string) =>{
        if (isNumeric){
            const parsed = parseFloat(text.replace(',', '.'))
            onChangeText(isNaN(parsed) ? '' : parsed.toString());
        } else{
            onChangeText(text)
        }
    }
    return(

        <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={"#000000"}
        onChangeText={handleChange} 
        value={value} 
        secureTextEntry = {secureTextEntry}
        style = {style.input}
        keyboardType={keyboardType}
        />

    )
}

const style = StyleSheet.create({
    input:{
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: COLORS.secundary
        
    }
})

export default InputGeneric;