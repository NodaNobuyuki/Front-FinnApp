import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { enableScreens } from 'react-native-screens';

import Home from './screens/Home';
import SignupScreen from './screens/SignupScreen';
import InsertValue from './screens/InsertValue';


enableScreens();


const Tab = createBottomTabNavigator()
const App = () =>{

  return (


    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='home' component={Home} options={{headerShown: false}} />
        <Tab.Screen name='SignupScreen' component={SignupScreen} options={{headerShown: false}} />
        <Tab.Screen name='insert' component={InsertValue} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default App;
