import { Alert, StyleSheet, View } from 'react-native';
import ButtonGeneric from '@/components/ui/ButtonGeneric';
import TextInputGeneric from '@/components/ui/TextInputGeneric';
import { useState } from 'react';

export default function HomeScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlePress = ()=>{
          Alert.alert(email)
      }
  return (

    <View style={style.container}>
      <ButtonGeneric press={handlePress}/>
      <TextInputGeneric placeholder='email' value={email} typing={setEmail}/>
      <TextInputGeneric placeholder='senha' value={password} typing={setPassword}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    borderColor:"#1111",
    borderWidth: 4,
  }
});

const iten = StyleSheet.create({
  caralho: {
    borderWidth: 4,
  }
})