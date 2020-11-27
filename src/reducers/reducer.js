import { 
    ADD_ITEM, 
    ADD_ITEM_FAIL, 
    ADD_ITEM_REQUEST, 
    DELETE_ITEM, 
    DELETE_ITEM_FAIL, 
    DELETE_ITEM_REQUEST, 
    GET_LIST, 
    GET_LIST_FAIL, 
    GET_LIST_REQUEST, 
    SAVE_LIST, 
    SAVE_LIST_FAIL, 
    SAVE_LIST_REQUEST, } from '../constants/constants'

export const listReducer = (state = { list: [{name: "Alan", age: "28"}], loading: false, error: '' }, action) => {
    switch(action.type){
        case ADD_ITEM_REQUEST:
            return { ...state, loading: true }
        case ADD_ITEM:
            return { ...state, loading: false, list: [...state.list, action.payload]}
        case ADD_ITEM_FAIL:
            return { ...state, loading: false, error: action.payload }
        case SAVE_LIST_REQUEST:
            return { ...state, loading: true }
        case SAVE_LIST:
            return { ...state, loading: false }
        case SAVE_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case GET_LIST_REQUEST:
            return { ...state, loading: true }
        case GET_LIST:
            return { ...state, loading: false, list: action.payload }
        case GET_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case DELETE_ITEM_REQUEST:
            return { ...state, loading: true }
        case DELETE_ITEM:
            return { ...state, loading: false, list: state.list.filter((x) => x.name !== action.payload)}
        case DELETE_ITEM_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}