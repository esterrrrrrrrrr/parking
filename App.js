import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import styled from "styled-components/native";
import Cadastro from './src/screens/cadastro';
import Vagas from './src/screens/vagas';


const ContainerApp = styled.SafeAreaView`
flex: 1;
`
export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      {/* <Login/> */}
      {/* <Cadastro/> */}
      <Vagas/> 
    </ContainerApp>
  );
}
