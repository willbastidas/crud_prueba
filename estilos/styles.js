import { StyleSheet } from "react-native";
import { colores } from "./colors";


export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      boton:{
        backgroundColor: '#4E505F',
        height: 35,
        borderColor: colores.dark,
        borderRadius: 10,
        borderWidth: 1,
      },
      textoBoton:{
        fontSize: 18,
        textAlign: 'center',
      },
      textoTitulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      textoNombre: {
        fontSize:16,
      },
      botonLista:{
        backgroundColor: colores.black,
        borderButtomWidth: 1,
        borderButtomColor: colores.c,
        marginBottom: 3,
        padding: 5,

      },
});