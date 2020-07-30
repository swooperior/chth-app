import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Context as BookingContext} from '../context/BookingContext';
import Spacer from '../components/Spacer';
import DatePicker from 'react-native-datepicker';
import StatusText from '../components/StatusText';

const BookingScreen = ({navigation}) => {
    const {state, updateBooking} = useContext(BookingContext);
    const id = navigation.getParam('id')
    const booking = state.find(b=>b.id == id)

    const [startDate, setStartDate] = useState(booking.start_date);
    const [endDate, setEndDate] = useState(booking.end_date);

    return(
        <View>
            <Spacer>
                <Text h4>{booking.fname+' '+booking.lname} - <StatusText status={booking.status}/></Text>
                <Text style={{color: 'gray'}}>{booking.name}</Text>
            </Spacer>
            <Spacer>
                <Text>Booking Drop-off Date</Text>
                <DatePicker
                    showIcon={false}
                    date={startDate}
                    onDateChange={setStartDate}
                />
            </Spacer>
            <Spacer>
                <Text>Booking Collection Date</Text>
                <DatePicker 
                    showIcon={false}
                    date={endDate}
                    onDateChange={setEndDate}
                />
            </Spacer>
            <Spacer>
                <Button title="Save Booking" onPress={()=>{
                    updateBooking(id, startDate, endDate, booking.status);
                    alert('Booking updated.');
                    navigation.pop();
                }}/>
            </Spacer>
            <Spacer>
                <Button type="outline" title="Cancel Booking" onPress={()=>{
                    updateBooking(id, booking.start_date, booking.end_date,-1);
                    alert('Booking Cancelled.');
                    navigation.pop();
                }}/>
            </Spacer>
            
        </View>
    );
};

const styles = StyleSheet.create({});

export default BookingScreen;