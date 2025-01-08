import { callApi } from "../api";

export function LoginApi(values){

    const body ={
        email: values.email, 
        password: values.password 
    }
    return callApi("/user/login", "POST", body)
}