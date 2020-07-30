import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
//import {Context as CustomerContext} from '../context/CustomerContext';
import {Feather} from '@expo/vector-icons';

const CustomersScreen = ({navigation}) => {
    //const {state, fetchCustomers} = useContext(CustomerContext);
    
    return(
        <View>
            <SearchBar lightTheme/>
            {/* <FlatList 
                data={state}
                keyExtractor={item => `${item.id}`}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Customer', {id: item.id})}>
                        <ListItem 
                            chevron 
                            bottomDivider
                            title={'#'+item.id+' - '+item.fname+ ' '+item.lname} 
                            subtitle={item.name+': '+item.start_date+' - '+item.end_date}

                        />
                        </TouchableOpacity>
                    )}}
            /> */}
           
        </View>
    ); 
};
CustomersScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('NewCustomer')}><Feather name="plus" size={30} style={{marginRight: 10}} /></TouchableOpacity> )
    };
};


const styles = StyleSheet.create({});

export default CustomersScreen;