import React, { useState, useContext} from "react";

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
    
    function setUserContext(values){
        
        const user_values ={
            email: values.email, 
            password: values.password 
        }
        
        setUser(user_values)
        console.log(user);
    }

    return(
        <userContext.Provider value={user}>
            <userSetContext.Provider value={setUserContext}>
                {props.children}
            </userSetContext.Provider>
        </userContext.Provider>
    )
}