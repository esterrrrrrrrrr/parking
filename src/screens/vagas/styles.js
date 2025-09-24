import styled from "styled-components/native";

export const VagasContainer = styled.View`
flex: 1;
display: "flex";
background-color: #1A1F16;
align-items: center;
justify-content: center;
`
export const Logo = styled.Image`
width: 150;
height: 150;
position: absolute;
left: -10;
top: -10;
`
export const Title = styled.Text`
font-size: 32px;
color: #F3DE2C;
top: 50;
position: absolute;
`
export const ContainerV = styled.View`
width: 332;
height: 672;
display: flex;
gap: 24;
`
export const WraperV = styled.View`
width: 332;
height: 116;
display: flex;
justify-content: space-between;
flex-direction: row;
`

export const Vaga = styled.TouchableOpacity`
width: 150;
height: 116;
background-color: #2DFF61;
border-radius: 10px;
align-items: center;
justify-content: center;
`
export const Txt1 = styled.Text`
font-size: 24;
text-align: center;
color: #1A1F16;
`
export const Btn2 = styled.TouchableOpacity`
display: "flex";
background-color: #1A1F16;
width: 348;
height: 57;
border-radius: 10px;
border: #F3DE2C 2px;
justify-content: center;
position: absolute;
bottom: 37;
`
export const Txt2 = styled.Text`
text-align: center;
font-size: 24;
color: #F3DE2C;
`