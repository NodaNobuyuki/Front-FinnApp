import React from "react";
import { Button, View, Alert } from "react-native";

const ButtonGeneric = () => (
  <Button
    title="Click me"
    onPress={() => Alert.alert("no fim, tu és refem apenas de si mesmo")}
    color="#4CAF50"
  />
);

export default ButtonGeneric;
