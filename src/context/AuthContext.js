import createDataContext from './createDataContext';
import tubsApi from '../api/tubs';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'log_in':
            return { errorMessage: '', token: action.payload };
        case 'log_out':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const tryLocalLogin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        console.log(token);
        dispatch({ type: 'log_in', payload: token });
        navigate('mainFlow');
    }else{
        //Navigate to authFlow
        navigate('Login');
    }
}

const logout = dispatch => async () =>{
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'log_out' });
    navigate('Login');
}

const login = dispatch => async ({username, password}) => {
    try{
        const response = await tubsApi.post('/login', {user: {username, password}});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'log_in', payload: response.data.token});
        //Navigate to mainFlow
        navigate('mainFlow');
    }catch(e){
        console.log(e.response.request._response);
        dispatch({type: 'add_error', payload: e.response.request._response.error})
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {tryLocalLogin, login, logout, clearErrorMessage},
    {token: null, errorMessage: ''}
)