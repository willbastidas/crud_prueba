import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    <View>
      <Text style={Styles.textoTitulo}>Detalles Del Producto</Text>


      <Text>nombre:{product.nombre} </Text>
      <Text>tipo de producto:{product.Tipo_de_producto} </Text>
      <Text>color de producto:{product.Color_de_producto} </Text>
      <Text>stock del preoducto:{product.stock} </Text>
    </View>
  );
}
