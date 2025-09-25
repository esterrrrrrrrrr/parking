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