import { callApi } from "../api";

export function SinginApi(values){

    const body ={
        email: values.email, 
        username: values.username,
        password: values.password,
        password_valid: values.password_valid, 

    }

    return callApi("/user", "POST", body)
}