import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components";

const AreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const HeaderApp = styled.Text`
  font-size: 25px;
  margin-bottom: 15px
`

const Input = styled.TextInput`
  background-color: #EEE;
  width: 90%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`

const AreaCalc = styled.View`
  background-color: #EEE;
  width: 90%;
  margin-top: 30px;
  padding: 10px;
  align-items: center;
`

const AreaTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px
`

const AreaItem = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
`

const App = () => {

  const [valorCompra, setValorCompra] = React.useState("0")
  const [valorGorjeta, setValorGorjeta] = React.useState("0")
  const [valorTotal, setValorTotal] = React.useState("0")

  React.useEffect(() => {
    calc()
  }, [valorCompra])

  const calc = () => {
    let valor = parseFloat(valorCompra) * 0.1
    setValorGorjeta(valor)
    setValorTotal(parseFloat(valorCompra) + valor)
  }

  return (

    <AreaView>
      <HeaderApp>Cálculo de Gorjetas</HeaderApp>
      <Input onChangeText={e => setValorCompra(e)} keyboardType="numeric" ></Input>
      <Button
        onPress={calc}
        title="Calcular" />

      <AreaCalc>
        <AreaTitle>Total da Compra</AreaTitle>
        <AreaItem>R$ {valorCompra > 0 || valorCompra != "" ? parseFloat(valorCompra).toFixed(2) : 0} </AreaItem>

        <AreaTitle>Valor Gorjeta</AreaTitle>
        <AreaItem>R$ {valorGorjeta > 0 || valorGorjeta == NaN ? parseFloat(valorGorjeta).toFixed(2) : 0} </AreaItem>

        <AreaTitle>Valor Total</AreaTitle>
        <AreaItem>R$ {valorTotal > 0 || valorTotal == NaN ? parseFloat(valorTotal).toFixed(2) : 0}</AreaItem>
      </AreaCalc>

    </AreaView>

  )

}

export default App