import { StyleSheet } from "react-native";
import { colores } from "./colors";


export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      conteiner2: {
        flex: 1,
        padding: 35,
      },
      boder : {
        borderRadius: 10,
      },
      titulo:{
        textAlign: "center",
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20,
      },
      boton:{
        backgroundColor: colores.sky_blue,
        height: 35,
        borderColor: colores.dark,
        borderRadius: 10,
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 5,
      },
      BotonLista:{
        backgroundColor:colores.orange,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        borderRadius: 10,
        marginBottom:3,
        marginTop: 3,
        padding:9.5,
      },
      textoBoton:{
        fontSize: 18,
        textAlign: 'center',
      },
      textoTitulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
      },
      textoNombre: {
        fontSize:16,
        textAlign: 'justify',
      },
      // textoColor:{
      //   textShadowColor: colores.white,
      // },
      botonLista:{
        backgroundColor: colores.black,
        borderButtomWidth: 1,
        borderButtomColor: colores.c,
        marginBottom: 3,
        padding: 5,
      },
      inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: colores.gray,

      },
});