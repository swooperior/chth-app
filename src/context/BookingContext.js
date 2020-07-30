import createDataContext from '../context/createDataContext';
import tubsApi from '../api/tubs';

const bookingReducer = (state, action) => {
    switch(action.type){
        case 'fetch_bookings':
            return action.payload;
        default:
            return state;
    }
}

const fetchBookings = dispatch => async () => {
    const response = await tubsApi.get('/bookings');
    //console.log(response.data);
    dispatch({ type:'fetch_bookings', payload: response.data });
}

const updateBooking = dispatch => async (id, start_date, end_date, status) => {
    await tubsApi.put(`/booking/${id}`, {booking: {start_date, end_date, status}})
}

export const { Provider, Context } = createDataContext(
    bookingReducer,
    {fetchBookings, updateBooking},
    []
)