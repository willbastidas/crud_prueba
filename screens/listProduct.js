import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Styles } from '../estilos/styles';
import { colores } from "../estilos/colors"

export default function listProduct() {
  return (
    <ScrollView>
        <TouchableOpacity style={Styles.boton}>
            <Text>agregar producto</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
