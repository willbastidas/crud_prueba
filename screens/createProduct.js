import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Styles } from '../estilos/styles';


export default function createProduct() {

  
    const initialState = {
      nombre:'',
      tipo_de_producto: '',
      color_de_producto: '' ,
      stock: '' ,
    };

  const [state, setState] = React.useState(initialState);
 
  const handleChangeText = (value, name)=> {
    setState[{...state, [name]:value}]
  };

  const saveProduct = ()=> {
    console.log(state);
  }

  return (
    <ScrollView style={Styles.conteiner2}>
      <Text style={Styles.titulo}>Crear Producto</Text>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Nombre' onChangeText={(value)=>handleChangeText(value,'Nombre')} value={state.nombre} />
      </View>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Tipo De Producto' onChangeText={(value)=>handleChangeText(value,'Tipo DE Producto') } value={state.tipo_de_producto}/>
      </View>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Color De Producto' value={state.color_de_producto} onChangeText={(value)=>handleChangeText(value,'color_de_producto') }></TextInput>
      </View>

      <View style={Styles.inputGroup} >
        <TextInput placeholder='Stock' value={state.stock} onChangeText={(value)=>handleChangeText(value,'Stock') }  />
      </View>
      <View>
        <Button title='Guardar Producto' onPress={saveProduct}></Button>
      </View>
    </ScrollView>
  );
}
