import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// importacion para poder usar el navegador tipo 'stack'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//importacion de librerias 
import listProduct from './screens/listProduct';
import createProduct from './screens/createProduct';
import showProduct from './screens/showProduct';





export default function App() {

  const Stack = createStackNavigator ();
  function MyStack (){
    return (
      <Stack.Navigator>
      <Stack.Screen name="List" component={listProduct}/>
      <Stack.Screen name="Create" component={createProduct}/>
      <Stack.Screen name="Show" component={showProduct}/>
    </Stack.Navigator>
    ) 
    
  }
  return (
   <NavigationContainer>
    <MyStack></MyStack>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
