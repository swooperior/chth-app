import createDataContext from './createDataContext';
import tubsApi from '../api/tubs';


const taskReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tasks':
            return action.payload;
        default:
            return state;
    }
}

const deliverTask = dispatch => async (id) => {
    await tubsApi.put(`/booking/${id}/delivered`);
}

const collectTask = dispatch => async (id) => {
    try{
        const response = await tubsApi.put(`/booking/${id}/collected`);
    }catch(e){
        console.log(e.response.request._response);
    }
    
}

const fetchTasks = dispatch => async () => {
    const response = await tubsApi.get('/tasks');
    dispatch({ type: 'fetch_tasks', payload: response.data })
}

export const { Provider, Context } = createDataContext(
    taskReducer,
    {fetchTasks, deliverTask, collectTask},
    [])