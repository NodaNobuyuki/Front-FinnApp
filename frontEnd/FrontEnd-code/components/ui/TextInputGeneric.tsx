import { StyleSheet, TextInput } from "react-native";


type TextInputGenericProps = {
    placeholder: string;
    value: string;
    typing: (text:string)=>void;
    password: boolean
    }

    

const TextInputGeneric = ({placeholder, value, typing, password}: TextInputGenericProps) =>(
    <TextInput 
        style={iten.input}
        placeholder={placeholder}
        value={value}
        onChangeText={typing}
        editable
        secureTextEntry = {password}
    />
);

const iten = StyleSheet.create({
  input: {
    borderWidth: 4,
    width:"100%",
    backgroundColor:"#EBEBEB",
    borderRadius:10
  }
})

export default TextInputGeneric