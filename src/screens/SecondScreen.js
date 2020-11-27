import React, {useState} from 'react'
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native'

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <TextInput 
                style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Nombre"
                onChangeText={(text) => setName(text)}
                value={name} />
            <TextInput 
                style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Edad"
                onChangeText={(number) => setAge(number)}
                value={age} />
            <Button title="Agregar" onPress={() => onButtonPress()}></Button>
            {loading ? <ActivityIndicator /> : <Text> </Text>}
        </View>
    )
}

export default SecondScreen
