import { SET_USER, LOADING_UI } from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });

    axios.post('/login', userData)
        .then(res => {
            const FBIdToken = `Bearer ${res.data.token}`
            localStorage.setItem('FBIdToken', FBIdToken)
            axios.defaults.headers.common['Authorization'] = FBIdToken

            dispatch(getUserData());

            history.push('/');
        })
        .catch(err => {
            console.log(err.response.data)
        })
}

export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}
