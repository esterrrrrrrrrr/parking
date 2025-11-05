import { useState } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function Cep(){
    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)

    function buscaCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log("Erro: ", err)
        })
    }

    return(
        <View>
            <TextInput
            placeholder="Digite o seu Cep"
            keyboardType="numeric"
            onChangeText={setCep}
            value={cep}
            />
            <TouchableOpacity onPress={buscaCep}> <Text>Buscar Cep</Text></TouchableOpacity>

            {
                data && <Text>{data.logradouro}</Text>
            }

        </View>
    )
}