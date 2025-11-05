<<<<<<< HEAD
import { Button, Image, ImageBackgroundComponent, Text, TextInput, View } from "react-native";
import { CadContainer, Logo, Btn1, Btn2, Txt1, Txt2, Input } from "./styles";
import styled from "styled-components/native";

const BtnWrapper =styled.View`
gap: 14;
`
const InputWrapper =styled.View`
gap:37;
`
const Wrapper = styled.View`
gap:45;
margin: auto 32px 96px 32px;
`
export default function Cadastro(){
    return(
            <CadContainer>
                <Logo source={require('../../assets/logo.png')} />
                <Wrapper>
                <InputWrapper>
                <Input
                    placeholder="Nome Completo"
                    placeholderTextColor="#585f5a"></Input>
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
                    <Txt1>Cadastrar</Txt1>
                </Btn1>
                <Btn2>
                    <Txt2>Login</Txt2>
                </Btn2>
                </BtnWrapper>
                </Wrapper>
            </CadContainer>
    )
}
=======
import React, { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { CadContainer, Logo, Btn1, Btn2, Txt1, Txt2, Input } from "./styles";
import api from "../../services/api";

const BtnWrapper = styled.View`
  gap: 14px;
`;

const InputWrapper = styled.View`
  gap: 37px;
`;

const Wrapper = styled.View`
  gap: 45px;
  margin: auto 32px 96px 32px;
`;

export default function Cadastro() {
  const navigation = useNavigation();

  // Estados dos inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 🔗 URL base da API (mude para o IP da sua máquina)
  const API_URL = "auth/register";
  // ⚠️ Use o IP da sua máquina local. O Expo Go não acessa "localhost".

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post(API_URL, {
        nome,
        email,
        senha,
      });

      if (response.status === 201 || response.status === 200) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("Vagas"); // Redireciona após cadastro
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível cadastrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <CadContainer>
      <Logo source={require("../../assets/logo.png")} />
      <Wrapper>
        <InputWrapper>
          <Input
            placeholder="Nome Completo"
            placeholderTextColor="#585f5a"
            value={nome}
            onChangeText={setNome}
          />
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
          <Btn1 onPress={handleCadastro}>
            <Txt1>Cadastrar</Txt1>
          </Btn1>

          <Btn2 onPress={() => navigation.navigate("Home")}>
            <Txt2>Login</Txt2>
          </Btn2>
        </BtnWrapper>
      </Wrapper>
    </CadContainer>
  );
}
>>>>>>> b3c1594 (feat: create apk)
