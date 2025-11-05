<<<<<<< HEAD
import { Button, Image, ImageBackgroundComponent, Text, TextInput, View } from "react-native";
import { LoginContainer, Logo, Btn1, Btn2, Txt1, Txt2, Input } from "./styles";
import styled from "styled-components/native";

const BtnWrapper =styled.View`
gap: 14;
`
const InputWrapper =styled.View`
gap:45;
`
const Wrapper = styled.View`
gap:75;
margin:auto 32px 96px 32px;
`
export default function Login(){
    return(
            <LoginContainer>
                <Logo source={require('../../assets/logo.png')} />
                <Wrapper>
                <InputWrapper>
                <Input
                    placeholder="E-mail"
                    placeholderTextColor="#585f5a"
                    keyboardType="email-adress"></Input>
                <Input
                    placeholder="Senha" secureTextEntry
                    placeholderTextColor="#585f5a"></Input>
                </InputWrapper>
                <BtnWrapper>
                <Btn1>
                    <Txt1>Entrar</Txt1>
                </Btn1>
                <Btn2>
                    <Txt2>Cadastre-se</Txt2>
                </Btn2>
                </BtnWrapper>
                </Wrapper>
            </LoginContainer>
    )
}
=======
import React, { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { LoginContainer, Logo, Btn1, Btn2, Txt1, Txt2, Input } from "./styles";
import styled from "styled-components/native";
import api from "../../services/api";


const BtnWrapper = styled.View`
  gap: 14px;
`;

const InputWrapper = styled.View`
  gap: 45px;
`;

const Wrapper = styled.View`
  gap: 75px;
  margin: auto 32px 96px 32px;
`;

export default function Login() {
  const navigation = useNavigation();

  // Estados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 🔗 URL base da API (mude para o IP da sua máquina)
  const API_URL = "/auth/login"; 
  // ⚠️ Use o IP local da sua máquina (não use localhost com Expo Go)

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post(API_URL, {
        email,
        senha,
      });

      if (response.status === 200) {
        const { token, usuario } = response.data;

        // Aqui você pode salvar o token com AsyncStorage:
        // await AsyncStorage.setItem('token', token);

        Alert.alert("Sucesso", `Bem-vindo!`);
        navigation.navigate("Vagas"); // Vai para a tela principal
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Usuário ou senha inválidos!");
    }
  };

  return (
    <LoginContainer>
      <Logo source={require("../../assets/logo.png")} />
      <Wrapper>
        <InputWrapper>
          <Input
            placeholder="E-mail"
            placeholderTextColor="#585f5a"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#585f5a"
            value={senha}
            onChangeText={setSenha}
          />
        </InputWrapper>

        <BtnWrapper>
          <Btn1 onPress={handleLogin}>
            <Txt1>Entrar</Txt1>
          </Btn1>

          <Btn2 onPress={() => navigation.navigate("Cadastro")}>
            <Txt2>Cadastre-se</Txt2>
          </Btn2>
        </BtnWrapper>
      </Wrapper>
    </LoginContainer>
  );
}
>>>>>>> b3c1594 (feat: create apk)
