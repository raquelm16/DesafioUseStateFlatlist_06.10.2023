import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Agendar from './Agendar'
import Consultas from './Consultas'

export default function Home({ navigation }: { navigation: any }) {

  return (
   
    <View style={styles.container}>
    <Text style={styles.title}>Você está na tela Inicial</Text>

    <TouchableOpacity onPress={() => navigation.push('Agendar')}>
      <Text style={styles.button}>Agendar uma consulta</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.push('Consultas')}>
      <Text style={styles.button}>Verificar consultas agendadas</Text>
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
    margin:5,
    fontWeight:500,
    color:'#fff'
  }
});
