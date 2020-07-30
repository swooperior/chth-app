import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Card} from 'react-native-elements';

const getStatus = (status) => {
    switch(status){
        case 0:
            return "Deliver";
        case 1:
            return "Delivered";
        case 2:
            return "Collect";
        case 3:
            return "Completed";
        default:
            return null;
    }
}
const getColor = (status) => {
    
    switch(status){
        case 0:
            return {backgroundColor: '#7fd674', borderRadius: 5, elevation: 10, marginBottom: 10};
        case 1:
            return {backgroundColor: '#62b84d', borderRadius: 5, elevation: 10, marginBottom: 15};
        case 2:
            return {backgroundColor: '#f78d8d', borderRadius: 5, elevation: 10, marginBottom: 15};
        case 3:
            return {backgroundColor: '#8dc1f2', borderRadius: 5, elevation: 10, marginBottom: 15};
        default:
            return null;
    }
}

const TaskCard = ({item}) => {
    return(
        <Card
            title={getStatus(item.status)+' '+item.name}
            titleStyle={styles.title}
            containerStyle={getColor(item.status)}
        >
            <View style={styles.info}>
                <Text style={styles.name}>{item.fname+' '+item.lname}</Text>
                <Text style={styles.address}>{item.address}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    info: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    title: {
        color: 'white'
    },
    name: {
        alignSelf: "flex-start",
        color: 'white'
    },
    address: {
        alignSelf: "flex-end",
        color: 'white'
    }
});

export default TaskCard;