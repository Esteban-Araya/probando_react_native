import axios from 'axios';
import { AxiosInterceptor } from './interceptors/axios.interceptors';

const axiosInstance = axios.create({
    baseURL: "http://192.168.0.17:8080", // Replace with your API's base URL
    headers: {
      "Content-Type": "application/json",
    },
  });
  
AxiosInterceptor(axiosInstance)

export async function callFetch(path, method, body = null ){
  console.log("AAAa");
  try{
    const response = await axiosInstance({
        url: path, 
        data: body,
        method: method
    })

    const status = await response["status"]
    const data = await response.data
    
    return {data, status}   
  }catch (error){

    const status = await error.response.status;
    const data = await error.response.data;

    return { data, status }; 
  }
}

