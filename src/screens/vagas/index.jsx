import { Logo, Btn1, Btn2, Txt1, Txt2, Title, VagasContainer, ContainerV, Vaga, WraperV } from "./styles";
import { useState } from 'react';
import { Modal } from "react-native";
import BasicModal from "./BasicModal";
import styled from "styled-components/native";


export default function Vagas(){
      const [ open, setOpen ] = useState(false)
      const [reportOpen, setReportOpen] = useState(false); // Modal de relatório
    return(
            <VagasContainer>
                <Logo source={require('../../assets/logo.png')} />
                <Title>VAGAS</Title>
                <ContainerV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                    </WraperV>
                    <WraperV> 
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                    </WraperV>
                    <WraperV>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                        <Vaga onPress={()=> setOpen(!open)} >
                            <Txt1>LIVRE</Txt1>
                        </Vaga>
                    </WraperV>
                    <BasicModal visible={open} onClose={() => setOpen(false)} />
                </ContainerV>

        <Modal visible={reportOpen} animationType="slide" transparent={true}>
            <ReportModalContainer>
              <ReportTitle>RELATÓRIO</ReportTitle>
              <ReportText>Ainda não entrou nenhum carro</ReportText>
              <CloseReportButton onPress={() => setReportOpen(false)}>
                <Img source={require('../../assets/sair.png')} />
              </CloseReportButton>
            </ReportModalContainer>
        </Modal>

      <Btn2 onPress={() => setReportOpen(true)}>
        <Txt2>Gerar Relatório</Txt2>
      </Btn2>
    </VagasContainer>
  );
}


 const ReportModalContainer = styled.View`
 flex: 1;
  background-color: #1a1f16;
  padding: 24px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

 const ReportTitle = styled.Text`
  font-size: 32px;
  color: #F3DE2C;
  top: 50;
  position: absolute;
`;

 const ReportText = styled.Text`
  font-size: 20px;
  color: #9DA9A0;
  text-align: center;
  margin-bottom: 20px;

`;

 const CloseReportButton = styled.TouchableOpacity`
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