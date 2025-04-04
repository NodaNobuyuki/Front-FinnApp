import enviaBackDados from "@/scripts/send-json";
import React from "react";
import { Button, View, Alert, TextInput } from "react-native";


type ButtonGenericProps = {
  press: () => void
}

const ButtonGeneric = ({press}: ButtonGenericProps) => (
  <Button
    title="Click me"
    onPress={press}
    color="#4CAF50"
  />
);

export default ButtonGeneric;
