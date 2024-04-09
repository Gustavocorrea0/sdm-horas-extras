import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    top_bar: {
      height: 90,
      width: "100%",
      backgroundColor: 'black',
      marginTop: 0,
      alignItems: 'center',
    },
  
    title: {
      fontSize: 32,
      color: 'white',
      marginTop: 35,
    },
  
    text_data: {
      fontSize: 23,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 20
    },
  
    campo_texto_dia:{
      height: 40,
      width: 80,
      backgroundColor: '#FFFFFF',
      marginLeft: 15,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'center',
    },
  
    campo_texto_mes:{
      height: 40,
      width: 80,
      backgroundColor: '#FFFFFF',
      marginLeft: 150,
      marginTop: 0,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'center'
    },
  
    campo_texto_ano:{
      height: 40,
      width: 100,
      backgroundColor: '#FFFFFF',
      marginLeft: 279,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'center'
    },
  
    campo_texto_horario_entrada:{
      height: 40,
      width: 150,
      backgroundColor: '#FFFFFF',
      marginLeft: 15,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'center'
    },
  
    campo_texto_horario_saida:{
      height: 40,
      width: 150,
      backgroundColor: '#FFFFFF',
      marginLeft: 230,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'center'
    },
  
    campo_texto_local:{
      height: 40,
      width: 368,
      backgroundColor: '#FFFFFF',
      marginLeft: 15,
      marginTop: 13,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 5,
      alignItems: 'left'
    },
  
    botao_adicionar:{
      height: 45,
      width: 300,
      backgroundColor: '#000000',
      alignItems: 'center',
      marginLeft: 50,
      marginTop: 10,
      borderRadius: 10
    },
  
    botao_limpar_campos:{
      height: 45,
      width: 300,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      marginLeft: 50,
      marginTop: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#000000'
    }
  
  });