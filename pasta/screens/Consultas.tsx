import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Agendar from './Agendar'

export default function Home({ navigation }: { navigation: any }) {

  const [agendamento] = useState([
    '\nNome: Raquel', 'CPF: 12345678998', 'Data de Nascimento: 16/09/2005',
    'Endereço: Rodovia Virgílio Varzea', 'Exame: Oftalmologista',
    'Observação: nenhuma', 'Data do exame: 09/10/2023', 'Valor do exame: R$ 100,00', 
    (<TouchableOpacity>
      <Text style={styles.button}>Editar</Text>
    </TouchableOpacity>),
    '\n\nNome: Alissa', 'CPF: 98765432112', 'Data de Nascimento: 20/11/2005',
    'Endereço: Rodovia 401', 'Exame: Otorrinolaringologista',
    'Observação: ouvido e garganta', 'Data do exame: 12/10/2023', 'Valor do exame: R$ 110,00',
    (<TouchableOpacity>
      <Text style={styles.button}>Editar</Text>
    </TouchableOpacity>),
    '\n\nNome: Mateus', 'CPF: 54321098765', 'Data de Nascimento: 10/04/2005',
    'Endereço: Rodovia Admar Gonzaga', 'Exame: Otorrinolaringologista (ouvido)',
    'Observação: ouvido', 'Data do exame: 25/10/2023', 'Valor do exame: R$ 90,00',
    (<TouchableOpacity>
      <Text style={styles.button}>Editar</Text>
    </TouchableOpacity>)
  ])

  return (
   
    <View style={styles.container}>
    <Text style={styles.title}>Você está na tela de consultas agendadas</Text>

    <FlatList
    data={agendamento}
    keyExtractor={item => item}
    renderItem={({item}) => (
      <Text style={styles.itens}>
        {item}
      </Text>
    )}

    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
      <Text>Você não tem nenhum agendamento.</Text>
    }
    />
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
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    margin:15,
    color:'#fff'
  },
  itens:{
    margin:3,
    color:'#fff',
    fontSize:13,
  },
  button:{
    backgroundColor:'#acbabf',
    padding:10,
    width:80,
    borderRadius:8,
    marginTop:10,
    fontWeight:500,
    color:'#fff',
    textAlign:'center',
  }
});
