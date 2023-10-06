import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Agendar from './screens/Agendar';
import Consultas from './screens/Consultas'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: true}}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Tela Inicial' }} />
      <Stack.Screen name="Agendar" component={Agendar} options={{ title: 'Agendar' }} />
      <Stack.Screen name="Consultas" component={Consultas} options={{ title: 'Consultas' }} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
