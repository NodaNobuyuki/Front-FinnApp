import { Alert, Pressable, Text } from "react-native";


type ButtonGenericProps = {
    pressEvent: () => void
    textLabel: string
    style?: object;
}

const ButtonGeneric = ( { pressEvent, textLabel, style }: ButtonGenericProps)  =>{


    return(

        <Pressable onPress={pressEvent} style={[style]} >
            <Text style={[style]}>{textLabel}</Text>
        </Pressable>
            
    );

}

export default ButtonGeneric;