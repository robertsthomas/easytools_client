import { SET_USER, SET_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTECATED } from '../types'

const initState = {
    authenticated: false,
    credentials: {},
}

export default function(state = initState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            }

        case SET_UNAUTHENTECATED:
            return initState
            
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        
        default:
            return state
    }
}

