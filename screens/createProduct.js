import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Alert} from 'react-native';
import { useState } from 'react';
import { Styles } from '../estilos/styles';

//importaciones de fira base
import appFirebase from '../credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc} from 'firebase/firestore';

const db = getFirestore(appFirebase);

export default function createProduct(props) {

  const initialState = {
    nombre:'',
    Tipo_de_producto:'',
    Color_de_producto:'',
    stock:'',
  }
  const [state, setState] = useState(initialState)

  const handleChangeText = (value, name)=> {
    setState({...state,[name]:value})

  }
  const saveProduct= async()=> {
    try {
      await addDoc(collection(db, 'productos'),{...state});
      Alert.alert('aviso', 'productos guardados');
      props.navigation.navigate('List');
    }
    catch {
      console.error(error)
    }
    
    //console.log(state)
  }


  return (
    <ScrollView style={Styles.conteiner2}>
      <Text style={Styles.titulo}>Crear Producto</Text>
      <View style={Styles.inputGroup}>
        <TextInput placeholder='nombre' onChangeText={(value)=>handleChangeText(value,'nombre')} value={state.nombre} />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput placeholder='Tipo de producto' onChangeText={(value)=>handleChangeText(value,'Tipo_de_producto')} value={state.Tipo_de_producto}/>
      </View>
      <View style={Styles.inputGroup}>
        <TextInput placeholder='Color de producto'onChangeText={(value)=>handleChangeText(value,'Color_de_producto')} value={state.Color_de_producto}/>
      </View>
      <View style={Styles.inputGroup}>
        <TextInput placeholder='stock' onChangeText={(value)=>handleChangeText(value,'stock')} value={state.stock}/>
      </View>
      <Button title='Guardar Datos' onPress={saveProduct} />
    </ScrollView>
  );
}
