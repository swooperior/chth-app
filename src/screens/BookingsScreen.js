import React, {useContext, useState} from 'react';
import {View, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import {Context as BookingContext} from '../context/BookingContext';
import {Feather} from '@expo/vector-icons';
import StatusText from '../components/StatusText';

const BookingsScreen = ({navigation}) => {
    const {state, fetchBookings} = useContext(BookingContext);
    const [search, setSearch] = useState('');
    
    const searchResults = (term) => {
        let results = []
        state.filter(function(item){
            if(item.fname.match(term) || item.lname.match(term) || item.address.match(term)){
                results.push(item);
            }
        });
        return results;
    }

    

    return(
        <View>
            <NavigationEvents onDidFocus={fetchBookings} />
            <SearchBar lightTheme placeholder="Search" onChangeText={(newVal)=>{
                setSearch(newVal);
                searchResults(search);
            }} 
                value={search} />
            <FlatList 
                style={styles.list}
                data={!search ? state : searchResults(search)}
                keyExtractor={item => `${item.id}`}
                renderItem={({item})=>{
                    let statusText = <StatusText status={item.status} nostyle/>;
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Booking', {id: item.id})}>
                        <ListItem 
                            chevron 
                            bottomDivider
                            title={'#'+item.id+' - '+item.fname+ ' '+item.lname+' - '+ statusText} 
                            subtitle={item.name+': '+item.start_date+' - '+item.end_date}

                        />
                        </TouchableOpacity>
                    )}}
            />
           
        </View>
    ); 
};

BookingsScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('NewBooking')}><Feather name="plus" size={30} style={{marginRight: 10}} /></TouchableOpacity> )
    };
};

const styles = StyleSheet.create({
    list: {
        marginBottom:65
    }
});

export default BookingsScreen;