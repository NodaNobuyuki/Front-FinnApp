import { StyleSheet, View } from 'react-native';
import ButtonGeneric from '@/components/ui/ButtonGeneric';
import TextInputGeneric from '@/components/ui/TextInputGeneric';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <ButtonGeneric/>
      <TextInputGeneric placeholder='email'/>
      <TextInputGeneric placeholder='senha'/>
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