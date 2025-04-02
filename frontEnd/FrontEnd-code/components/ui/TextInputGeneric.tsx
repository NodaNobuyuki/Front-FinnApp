import { StyleSheet, TextInput } from "react-native";


type TextInputGenericProps = {
    placeholder: string;
    value: string;
    typing: (text:string)=>void;
      
    }

const TextInputGeneric = ({placeholder, value, typing}: TextInputGenericProps) =>(
    <TextInput 
        style={iten.caralho}
        placeholder={placeholder}
        value={value}
        onChangeText={typing}
        editable
    />
);

const iten = StyleSheet.create({
  caralho: {
    borderWidth: 4,
    width:"100%"
  }
})

export default TextInputGeneric