import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Styles } from '../estilos/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function showProduct() {
  return (
    <View style={Styles.container}>
      <Text>show product</Text>
      <StatusBar style="auto" />
    </View>
  );
}
