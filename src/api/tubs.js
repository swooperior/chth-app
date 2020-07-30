import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    //LAN ONLY, CHANGE TO WAN ADDRESS FOR PROD
    baseURL: 'http://192.168.1.10:3000'
});

instance.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
);

export default instance;