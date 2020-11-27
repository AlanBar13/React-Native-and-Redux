import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import { saveList, getList } from '../actions/actions'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const NameList = useSelector((state) => state.list)
    const {loading, error, list} = NameList
    //console.log(NameList.list)

    const onSaveButtonPressed = () => {
        dispatch(saveList(list))
    }

    const onExportButtonPressed = () => {
        dispatch(getList())
    }

    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {list.map(item => {
                return <Text key={item.age}>{item.name + " " + item.age}</Text>
            })}
            <Button title="Añadir a la lista" onPress={() => navigation.navigate("Agregar")}></Button>
            <Button title="Guardar lista en Async" onPress={() => onSaveButtonPressed()}></Button>
            <Button title="Exportar lista en Async" onPress={() => onExportButtonPressed()}></Button>
        </View>
    )
}

export default HomeScreen
