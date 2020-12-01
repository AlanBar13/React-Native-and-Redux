import React, {useEffect} from 'react'
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import { saveList, getList } from '../actions/actions'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const NameList = useSelector((state) => state.list)
    const {loading, error, list} = NameList
    console.log(NameList)

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
        
        <View style={HSstyles.mainContainer}>
            <View style={HSstyles.listContainer}>
               <View style={{flex: 1}}>
                  {list.map(item => {
                        return <Text key={item.age} style={HSstyles.text} >{item.name + " " + item.age}</Text>
                  })}
               </View>
            </View>
            <View style={{flex: 1}}>
                <Button title="Añadir a la lista" onPress={() => navigation.navigate("Agregar")}></Button>
                <Button title="Guardar lista en Async" onPress={() => onSaveButtonPressed()}></Button>
                <Button title="Exportar lista en Async" onPress={() => onExportButtonPressed()}></Button>
            </View>
            {loading ? <ActivityIndicator /> : <View />}
        </View>
    )
}

const HSstyles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    listContainer: {
        flex: 1,
        margin: 20
    },
    text: {
        fontFamily: "Verdana",
        fontSize: 20,
    }
})

export default HomeScreen
