
import { colors } from "@/constants/Colors";
import React from "react";
import { Button, View, Alert, TextInput, StyleSheet, Pressable, Text } from "react-native";

type ButtonGenericProps ={
  press : ()=>void,
  titulo: string
}



const ButtonGeneric = ({press, titulo}:ButtonGenericProps) => (
  <Pressable
    onPress={press}
    style = {styles.button}
  >
    <Text>Continuar</Text>
  </Pressable>
);

const styles = StyleSheet.create ({
  button:{
    borderRadius:10,
    backgroundColor: colors.primary,
    alignItems: 'center'
  }
});

export default ButtonGeneric;
