import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function Home({ navigation }: { navigation: any }) {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [data, setData] = useState('')
  const [end, setEnd] = useState('')
  const [exame, setExame] = useState('')
  const [obs, setObs] = useState('')
  const [dataExame, setDataExame] = useState('')
  const [valor, setValor] = useState('')

  function cadastrar(){
    console.log('Nome: ',name,'\nCPF: ', cpf, '\nData de nascimento: ', data,
    '\nEndereço: ', end, '\nExame: ', exame, '\nObservação: ',obs, '\nValor: ', valor);
  }

  return (
   
    <View style={styles.container}>
    <Text style={styles.title}>Você está na tela de Agendamento</Text>

    <TextInput
    style={styles.input}
    placeholder='Nome Completo'
    placeholderTextColor={'#fff'}
    value={name}
    onChangeText={setName}
    />

  <TextInput
      style={styles.input}
    placeholder='CPF'
    placeholderTextColor={'#fff'}
    value={cpf}
    onChangeText={setCpf}
    />


  <TextInput
      style={styles.input}
    placeholder='Data de nascimento'
    placeholderTextColor={'#fff'}
    value={data}
    onChangeText={setData}
    />

  <TextInput
      style={styles.input}
    placeholder='Endereço'
    placeholderTextColor={'#fff'}
    value={end}
    onChangeText={setEnd}
    />

    <TextInput
    style={styles.input}
    placeholder='Qual exame você vai realizar?'
    placeholderTextColor={'#fff'}
    value={exame}
    onChangeText={setExame}
    />

<TextInput
    style={styles.input}
    placeholder='Observação'
    placeholderTextColor={'#fff'}
    value={obs}
    onChangeText={setObs}
    />

  <TextInput
    style={styles.input}
    placeholder='Qual a data da consulta?'
    placeholderTextColor={'#fff'}
    value={dataExame}
    onChangeText={setDataExame}
    />

    <TextInput
    style={styles.input}
    placeholder='Valor a ser pago'
    placeholderTextColor={'#fff'}
    value={valor}
    onChangeText={setValor}
    />


    <TouchableOpacity onPress={cadastrar}>
      <Text style={styles.button}>Cadastrar</Text>
    </TouchableOpacity>

  </View>
);
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    margin:15,
    color:'#fff'
  },
  button:{
    backgroundColor:'#acbabf',
    padding:10,
    borderRadius:8,
    margin:15,
    fontWeight:500,
    color:'#fff'
  },
  input:{
    margin:10,
    width:'60%',
    borderBottomWidth:2,
    borderColor:'#acbabf',
    color:'#fff',
    fontSize:13
  }
});
