import React from 'react';
import {Text} from 'react-native';

const StatusText = (status, nostyle) => {
    console.log(status);
    const statusText = () => {
        switch(status.status){
            case -1:
                return ['Cancelled', 'gray'];
            case 0:
                return ['Deliver', 'green'];
            case 1:
                return ['Delivered', 'darkgreen'];
            case 2:
                return ['Collect', 'red'];
            case 3:
                return ['Completed', 'blue'];
            default:
                return 
        }
    }
    if(nostyle){
        return statusText()[0];
    }else{
        return <Text style={{color: statusText()[1]}}>{statusText()[0]}</Text>;
    }
    

}

export default StatusText;