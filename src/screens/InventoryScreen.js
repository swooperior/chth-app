import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button } from 'react-native-elements';
import {SearchBar, ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Feather} from '@expo/vector-icons';

const InventoryScreen = ({navigation}) => {
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
InventoryScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('NewItem')}><Feather name="plus" size={30} style={{marginRight: 10}} /></TouchableOpacity> )
    };
};

const styles = StyleSheet.create({});

export default InventoryScreen;