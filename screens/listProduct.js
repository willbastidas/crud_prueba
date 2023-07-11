import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Styles } from '../estilos/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//importaciones de fira base
import appFirebase from '../credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc} from 'firebase/firestore';

const db = getFirestore(appFirebase);


export default function listProduct(props) {
// const [lista, setLista] = React.useState([]) si lo quieres usar con ==> (import * as React from 'react';)
  const [lista, setLista] = useState([]);

  useEffect(()=>{
    const getLista = async()=>{
      try{
        const querySnapshot = await getDocs(collection(db, 'productos'));
        
        const docs = []
        querySnapshot.forEach((doc)=> {
          const {nombre, Tipo_de_producto, color_de_producto, stock} = doc.data()
          docs.push({
            id:doc.id,
            nombre,
            Tipo_de_producto,
            color_de_producto,
            stock,
          })
        }) 
        setLista(docs)
      }catch(error){ console.log(error);}
    } 
  getLista()
  },[lista])




  return (
    <ScrollView>
        <View>
            <Text style={Styles.textoTitulo}>Lista de producto</Text>
        </View>
        <TouchableOpacity style={Styles.boton} onPress={()=>props.navigation.navigate('Create')}> 
            <Text style={Styles.textoBoton}>agregar producto</Text>
        </TouchableOpacity>
        <View>
          {
            lista.map((list)=>
            <TouchableOpacity key={list.id} style={Styles.BotonLista}>
              <Text style={Styles.textoNombre}>informacion sobre: {list.nombre}</Text>
            </TouchableOpacity>
            )
          }
        </View>
        {/*onPress={()=>props.navigation.navigate('Create')} ==> Se utiliza para al presionar mandarte a la otra pantalla en este caso create*/}
        
    </ScrollView>
  );
}
