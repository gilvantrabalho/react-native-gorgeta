import React from "react";
import {
    View,
    Text,
    TextInput
} from 'react-native'
import styled from "styled-components/native";

const Input = styled.TextInput`
    border: 1px solid red
`

const Home = props => {

    const [name, setName] = React.useState('')

    return (
        <View>
            <Text>{ name }</Text>
            <TextInput onChangeText={ e => { setName(e) } } />
        </View>
    )

}

export default Home