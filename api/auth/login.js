import { callApi } from "../api";

export function useLogin(values){

    const body ={
        email: values.email, 
        password: values.password 
    }
    return callApi("/user/login", "POST", body)
}