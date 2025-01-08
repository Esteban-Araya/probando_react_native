import { storageGetAccessToken } from "../../utils/storage";

export const AxiosInterceptor = (axios) =>{ 

    axios.interceptors.request.use( async (config)=>{
        config.headers.Authorization = await storageGetAccessToken()
        console.log("data: ",config.data);
        return config
    })
}