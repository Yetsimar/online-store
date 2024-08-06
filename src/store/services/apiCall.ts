import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Error, Success } from '@/plugins/toastify';
import router from '@/router/index';
import { ref } from 'vue';

interface ApiCallConfig {
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; 
    data?: any;
    params?: any;
    tokenQ?: string;
    message?: string;
}

export const loading = ref<boolean>(false)

export const apiCall = async (configRequest: ApiCallConfig): Promise<AxiosResponse<any>> => {
    try {
        const config: AxiosRequestConfig = {
            baseURL: import.meta.env.VITE_API_URL,
            url: configRequest?.url,
            method: configRequest?.method,
            data: configRequest?.data,
            params: configRequest?.params,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };
        loading.value = true
        const res = await axios(config);

        if (configRequest?.message) {
            Success(configRequest.message);
        }
        loading.value = false
        return Promise.resolve(res);
    } catch (er) {
        console.error(er);
        Error('Error')
        loading.value = false
        return Promise.reject(er);
        
    } finally {()=>   loading.value = false}
};
