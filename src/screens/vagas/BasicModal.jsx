<<<<<<< HEAD
import { Modal, Image } from 'react-native';
import styled from 'styled-components/native';

export default function BasicModal({ visible, onClose }) {
=======
import { useState } from 'react';
import { Modal, Image } from 'react-native';
import styled from 'styled-components/native';
import api from '../../services/api';

export default function BasicModal({ visible, onClose }) {
  const [placa, setPlaca] = useState("");
  const [data, setData] = useState([])

  function registrarEntrada(){
    console.log(placa)
    api.post("/api/veiculos/entrada", { placa })
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => {
        console.log(err)
    })}

>>>>>>> b3c1594 (feat: create apk)
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <ModalBackground>
        <Container>
          <CloseButton onPress={onClose}>
            <Img source={require('../../assets/sair.png')} />
          </CloseButton>
          <Title>ENTRADA</Title>
          <InputContainer>
              <InputView>
                <Txt1>Placa</Txt1>
<<<<<<< HEAD
                <Input></Input>
              </InputView>
              <InputView>
                <Txt1>Dados de entrada</Txt1>
                <Input></Input>
              </InputView>
              <InputView>
                <Txt1>Valor por hora</Txt1>
                <Input></Input>
              </InputView>
          </InputContainer>
          <Btn2>
=======
                <Input value={placa} onChangeText={setPlaca}></Input>
              </InputView>
          </InputContainer>
          <Btn2 onPress={registrarEntrada}>
>>>>>>> b3c1594 (feat: create apk)
            <Txt2>Concluir</Txt2>
          </Btn2>
        </Container>
      </ModalBackground>
    </Modal>
  )
}


const ModalBackground = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
<<<<<<< HEAD
  background-color: rgba(0, 0, 0, 0.5);
`

const Container = styled.View`
  background-color: #1a1f16;
=======
  background-color: #1A1F16;
`

const Container = styled.View`
  background-color: #1A1F16;
>>>>>>> b3c1594 (feat: create apk)
  /* padding: 20px; */
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  width: 100%;
<<<<<<< HEAD
  height: 75%;
=======
  height: 100%;
>>>>>>> b3c1594 (feat: create apk)
`

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 28px;
  top: 28px;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: #f3de2c;
`

const Img = styled.Image`
  width: 16px;
  height: 16px;
`

const Title = styled.Text`
  font-size: 32;
  color: #f3de2c;
<<<<<<< HEAD
  top: 10%;
=======
  top: 30%;
>>>>>>> b3c1594 (feat: create apk)
`
const Txt1 = styled.Text`
  font-size: 24;
  color: #9DA9A0;
`
const InputView = styled.View`
  
`
const InputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  gap: 38;
`
const Input = styled.TextInput`
width: 348;
height: 57;
border-radius: 10px;
color: #f3de2c;
font-size: 24;
padding: 10px 20px 10px 20px;
border: 2px #9DA9A0;
`
const Btn2 = styled.TouchableOpacity`
display: "flex";
background-color:#F3DE2C ;
width: 348;
height: 57;
border-radius: 10px;
border:  2px;
justify-content: center;
position: absolute;
bottom: 37;
`
const Txt2 = styled.Text`
text-align: center;
font-size: 24;
color: #1A1F16;
`


