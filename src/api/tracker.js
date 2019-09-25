import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance =  axios.create({
    baseURL:"http://5a28e936.ngrok.io"
})

//runs with ngrok and has to be changed every 8 hours
//ngrok start PORT
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;