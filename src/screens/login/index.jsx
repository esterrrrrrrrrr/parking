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