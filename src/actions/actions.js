import { 
    GET_LIST, 
    GET_LIST_FAIL, 
    GET_LIST_REQUEST, 
    ADD_ITEM_REQUEST, 
    ADD_ITEM_FAIL, 
    ADD_ITEM,
    SAVE_LIST,
    SAVE_LIST_REQUEST,
    SAVE_LIST_FAIL } from '../constants/constants'

import AsyncStorage from '@react-native-async-storage/async-storage'

export const getList = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LIST_REQUEST })
        const value = await AsyncStorage.getItem('List')
        if (value !== null){
            const parsedList = JSON.parse(value)
            console.log(parsedList)
            dispatch({ type: GET_LIST, payload: parsedList })
        }else{
            dispatch({ type: GET_LIST_FAIL, error: "Lista en NULO" })
        }
    } catch (e) {
        dispatch({ type: GET_LIST_FAIL, error: "Error al regresar la lista" })
    }
}

export const saveList = (list) => async (dispatch) => {
    try {
        dispatch({ type: SAVE_LIST_REQUEST })
        const JSONList = JSON.stringify(list)
        console.log(JSONList)
        await AsyncStorage.setItem('List', JSONList)
        dispatch({ type: SAVE_LIST })
    } catch (e) {
        dispatch({ type: SAVE_LIST_FAIL, error: "Error al guardar la lista" })
    }
}

export const addToList = (name, age) => (dispatch) => {
    dispatch({type: ADD_ITEM, payload: {name, age}})
}