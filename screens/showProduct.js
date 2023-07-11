import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Styles } from '../estilos/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect} from 'react';

//importaciones de fira base
import appFirebase from '../credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc} from 'firebase/firestore';

const db = getFirestore(appFirebase);

export default function showProduct(props) {

  const [product, setProduct] = useState({});

  const getOneProduct = async(id)=>  {
    try {
      const docRef = doc(db, 'productos', id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data())
    } catch (error){ console.error(error)
    }
  }

  useEffect(()=> {
    getOneProduct(props.route.params.productID)
  },[])

  return (
    <ScrollView style={Styles.conteiner2}>
      <Text style={Styles.textoTitulo}>Detalles Del Producto</Text>


      <Text style={Styles.sub}>Nombre: {product.nombre} </Text>
      <Text style={Styles.sub}>Tipo De Producto: {product.Tipo_de_producto} </Text>
      <Text style={Styles.sub}>Color De Producto: {product.Color_de_producto} </Text>
      <Text style={Styles.sub}>Stock Del Preducto: {product.stock} </Text>
    </ScrollView>
  );
}
