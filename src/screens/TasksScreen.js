import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context as TaskContext} from '../context/TaskContext';
import { NavigationEvents } from 'react-navigation';
import TaskCard from '../components/TaskCard';



const TasksScreen = ({navigation}) => {
    const { state, fetchTasks } = useContext(TaskContext);
    //console.log(state);
    return(
        <View style={{flex: 1}}>
            <NavigationEvents onDidFocus={fetchTasks} />
           
            <FlatList 
            style={styles.list}
            data={state}
            keyExtractor={item => `${item.id}`}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Task', {id: item.id})}>
                        <TaskCard item={item} />
                    </TouchableOpacity>
                );
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1
        
    }
});

export default TasksScreen;