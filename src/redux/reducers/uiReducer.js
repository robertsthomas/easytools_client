import { LOADING_UI } from '../types'

const initState = {
    loading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}