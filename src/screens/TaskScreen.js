import React, {useContext} from 'react';
import {View, StyleSheet, Linking, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as TaskContext} from '../context/TaskContext';
import Spacer from '../components/Spacer';
import TaskCard from '../components/TaskCard';
import { FontAwesome } from '@expo/vector-icons'

const TaskScreen = ({navigation}) => {
    const { state, collectTask, deliverTask } = useContext(TaskContext);
    const id = navigation.getParam('id')
    const task = state.find(t=>t.id == id)

    const actionButton = (task) => {
        switch(task.status){
            case 0:
                return(<Spacer><Button 
                    title="Mark Delivered"
                    onPress={()=>{
                        deliverTask(task.id);
                        alert('Marked as delivered!');
                        navigation.pop();
                    }}
                /></Spacer>);
            case 2:
                return(<Spacer><Button 
                    title="Mark Collected"
                    onPress={()=>{
                        collectTask(task.id);
                        alert('Marked as collected!');
                        navigation.pop();
                    }}
                /></Spacer>);
            default:
        }
    }

    const callButton = (task) => {
        let phoneNumber = task.phone;
        if (Platform.OS === 'android') {
        phoneNumber = `tel:${task.phone}`;
        }
        else {
        phoneNumber = `telprompt:${task.phone}`;
        }
        return(<Button buttonStyle={styles.button} title={<FontAwesome name="phone" size={20} /> } onPress={()=>Linking.openURL(phoneNumber)}/>);
    }

    const navigateButton = (task) => {
        const url = Platform.select({
            ios: `maps:0,0?q=${task.address}`,
            android: `geo:0,0?q=${task.address}`,
          })
          
          return <Button buttonStyle={styles.button} title={<FontAwesome name="map-marker" size={20} /> } onPress={()=>Linking.openURL(url)} />
    }

    return(
        <View>
            {task ? <TaskCard item={task} /> : null}
            {task ? actionButton(task) : null}
            {task ? <View style={styles.buttons}><Spacer>{callButton(task)}</Spacer><Spacer>{navigateButton(task)}</Spacer></View> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button:{
        width:150
    }
});

export default TaskScreen;