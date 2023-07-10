import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Styles } from '../estilos/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function listProduct(props) {
  return (
    <ScrollView>
        <View>
            <Text style={Styles.textoTitulo}>Lista de producto</Text>
        </View>
        {/*onPress={()=>props.navigation.navigate('Create')} ==> Se utiliza para al presionar mandarte a la otra pantalla en este caso create*/}
        <TouchableOpacity style={Styles.boton} onPress={()=>props.navigation.navigate('Create')}> 
            <Text style={Styles.textoBoton}>agregar producto</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
