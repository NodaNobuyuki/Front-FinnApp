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

    <View style={style.header}>
      <ButtonGeneric press={handlePress} titulo='criar conta'/>
      <TextInputGeneric placeholder='email' value={email} typing={setEmail}/>
      <TextInputGeneric placeholder='senha' value={password} typing={setPassword}/>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    borderColor:"#1111",
    borderWidth: 4,
  },
  footer:{
    
  }
});
