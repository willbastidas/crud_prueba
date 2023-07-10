import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Styles } from '../estilos/styles';


export default function createProduct() {

  
    const initialState = {
     nombre: '',
    tipo_de_producto: String ,
    color_de_producto: String ,
    stock: Number ,
  };

  const [state, setState] = useState(initialState);
 
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
        <TextInput placeholder='Nombre' onChangeText={(value)=>handleChangeText(value,'Nombre') } value={state.nombre}>
          
        </TextInput>
      </View>

      <View style={Styles.inputGroup}>
        <TextInput placeholder='Tipo De Producto' onChangeText={(value)=>handleChangeText(value,'tipo_de_producto') } value={state.tipo_de_producto}>

        </TextInput>
      </View>

      <View style={Styles.inputGroup} onChangeText={(value)=>handleChangeText(value,'color_de_producto') } value={state.color_de_producto}>
        <TextInput placeholder='Color De Producto'></TextInput>
      </View>

      <View style={Styles.inputGroup} onChangeText={(value)=>handleChangeText(value,'stock') } value={state.stock}>
        <TextInput placeholder='Stock'></TextInput>
      </View>
      <View>
        <Button title='Guardar Producto' onPress={saveProduct}></Button>
      </View>
    </ScrollView>
  );
}
