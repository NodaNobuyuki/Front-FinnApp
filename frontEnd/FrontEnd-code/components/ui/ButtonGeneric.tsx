
import React from "react";
import { Button, View, Alert, TextInput } from "react-native";

type ButtonGenericProps ={
  press : ()=>void
}



const ButtonGeneric = ({press}:ButtonGenericProps) => (
  <Button
    title="Click me"
    color="#4CAF50"
    onPress={press}
  />
);

export default ButtonGeneric;
