import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
//import * as React from 'react';
import { useState } from 'react';
import { Styles } from '../estilos/styles';


export default function createProduct() {

  
  const [state, setState] = useState(initialState);
 
  
  const initialState = {
    nombre: '' ,
    tipo_de_producto: '' ,
    color_de_producto: '' ,
    stock: '' ,
  };

  const handleChangeText = (value, name)=> {
    setState [{...state, [name]:value}]
  };



  return (
    <ScrollView style={Styles.conteiner2}>
      <Text style={Styles.titulo}>Crear Producto</Text>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Nombre' onChangeText={(value)=>handleChangeText(value,'Nombre') } value={state.nombre}/>
      </View>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Tipo De Producto' onChangeText={(value)=>handleChangeText(value,'Tipo De Producto') } value={state.tipo_de_producto} />
      </View>

      <View style={Styles.inputGroup} onChangeText={(value)=>handleChangeText(value,'Color De Producto') } value={state.color_de_producto}>
        <TextInput placeholder='Color De Producto' />
      </View>

      <View style={Styles.inputGroup} onChangeText={(value)=>handleChangeText(value,'Stock') } value={state.stock}>
        <TextInput placeholder='Stock' />
      </View>

      <View>
        <Button title='Guardar Producto'></Button>
      </View>
    </ScrollView>
  );
}
