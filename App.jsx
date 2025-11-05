import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/login';
import styled from "styled-components/native";
import Cadastro from './src/screens/cadastro';
import Vagas from './src/screens/vagas';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cep from './index.jsx';
import BasicModal from './src/screens/vagas/BasicModal.jsx';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions:{
    headerShown: false
  },
  screens: {
    Home: Login,          
    Cadastro: Cadastro,
    Vagas: Vagas,
    BasicModal: BasicModal

  }
})  
const Navigation = createStaticNavigation(RootStack)

const ContainerApp = styled.SafeAreaView`
flex: 1;
`
export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      
      <Navigation/>

    </ContainerApp>
  );
}
