import React, {useState} from 'react'
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { addToList } from '../actions/actions'

const SecondScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const listState = useSelector(state => state.list)
    const { loading, error } = listState
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const onButtonPress = () => {
        dispatch(addToList(name, age))
        navigation.navigate("Lista")
        setAge('')
        setName('')
    }

    return (
        <View style={SSstyles.mainContainer}>
           <TextInput 
                style={SSstyles.textInput}
                placeholder="Nombre"
                onChangeText={(text) => setName(text)}
                value={name} />
            <TextInput 
                style={SSstyles.textInput}
                placeholder="Edad"
                onChangeText={(number) => setAge(number)}
                value={age} />
            <Button title="Agregar" onPress={() => onButtonPress()}></Button>
            {loading ? <ActivityIndicator /> : <Text> </Text>}
        </View>
    )
}

const SSstyles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textInput: {
        height: 40, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        fontFamily: "Verdana",
        fontSize: 20
    }
})

export default SecondScreen
