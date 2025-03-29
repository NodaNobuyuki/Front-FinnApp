import { StyleSheet, TextInput } from "react-native";


type TextInputGenericProps = {
    placeholder: string;
}

const TextInputGeneric = ({placeholder}: TextInputGenericProps) =>(
    <TextInput 
        style={iten.caralho}
        placeholder={placeholder}
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