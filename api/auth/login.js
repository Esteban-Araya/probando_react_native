import { callFetch } from "../api";

export function useLogin(values){

    const body ={
        email: values.email, 
        password: values.password 
    }
    return callFetch("/user/login", "POST", body)
}