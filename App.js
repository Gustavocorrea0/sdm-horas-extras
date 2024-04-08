import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [hStart, setHStart] = useState()
  const [hExit, setHExit] = useState()
  const [local, setLocal] = useState()

  return (
    <SafeAreaView style={{ backgroundColor: '#6F6F6F'}}>

      <View style={styles.top_bar}>
        <Text style={styles.title}>SDM</Text>
      </View>

      <Text style={styles.text_data}>DATA</Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 40, marginTop: 15}}>Dia</Text>
      <View style={styles.campo_texto_dia}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setDay(day)}
          value={day}
        />
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 170, marginTop: -67}}>Mês</Text>
      <View style={styles.campo_texto_mes}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setMonth(month)}
          value={month}
        />
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 310, marginTop: -67}}>Ano</Text>
      <View style={styles.campo_texto_ano}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setYear(year)}
          value={year}
        />
      </View>

      <View style={{width: '100%', height: 5, backgroundColor: '#D9D9D9', marginTop: 20}}></View>

      <Text style={styles.text_data}>HORÁRIOS</Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 50, marginTop: 15}}>Entrada</Text>
      <View style={styles.campo_texto_horario_entrada}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setHStart(hStart)}
          value={hStart}
        />
      </View>


      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 283, marginTop:-67}}>Saida</Text>
      <View style={styles.campo_texto_horario_saida}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setHExit(hExit)}
          value={hExit}
        />
      </View>

      <View style={{width: '100%', height: 5, backgroundColor: '#D9D9D9', marginTop: 20}}></View>

      <Text style={styles.text_data}>LOCAL</Text>
      <View style={styles.campo_texto_local}>
        <TextInput
          style={{ fontSize: 20, fontWeight: 'normal', marginTop: 3}}
          onChangeText={(text) => setLocal(local)}
          value={local}
        />
      </View>

      <View style={{width: '100%', height: 5, backgroundColor: '#D9D9D9', marginTop: 20}}></View>

      <View style={styles.botao_adicionar}>
        <Text style={{ fontSize: 20, color: '#FFFFFF', marginTop: 10, fontWeight: 'normal'}}>Lançar Hora Extra</Text>
      </View>

      <View style={styles.botao_limpar_campos}>
        <Text style={{ fontSize: 20, color: '#000000', marginTop: 7, fontWeight: 'bold'}}>Limpar Campos</Text>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
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
