import React, { useState, useContext} from "react";
import { storageSetAccessToken, storageSetRefreshToken } from "../utils/storage";
const userContext = React.createContext();
const userSetContext = React.createContext();

export function useUserContext(){
    return useContext(userContext)
}

export function useUserSetContext(){
    return useContext(userSetContext)
}
export function UserProvider(props){

    const [user, setUser] = useState({}) 
    
    async function setUserContext(values){

        const user_values = {
            email: values.email ? values.email : user.email , 
            password: values.password ? values.password : user.password,
            refresh_token: values.refresh_token ? values.refresh_token : user.refresh_token,
            access_token: values.access_token ? values.access_token : user.access_token,
        }

        await storageSetRefreshToken(user_values.refresh_token)
        await storageSetAccessToken(user_values.access_token)

        setUser(user_values)
    }

    return(
        <userContext.Provider value={user}>
            <userSetContext.Provider value={setUserContext}>
                {props.children}
            </userSetContext.Provider>
        </userContext.Provider>
    )
}