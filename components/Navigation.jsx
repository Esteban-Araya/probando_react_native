import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "./Welcome";
import { ListPost } from "./ListPost";
import { Login } from "../screen/Login";
import { Singin } from "../screen/Singin";
import { CreatePost } from "../screen/CreatePost";

const Stack = createNativeStackNavigator() 

function StackGroup(){
    return (
        <Stack.Navigator initialRouteName="login"  
            screenOptions={()=> ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="singin" component={Singin}/>

            <Stack.Screen name="feed" component={TabGroup}/>
        </Stack.Navigator>
    )
}
 
const Tab = createBottomTabNavigator();

export function TabGroup() {
    return (
        <Tab.Navigator initialRouteName="create post">
            <Tab.Screen name="welcome" component={Welcome} />
            <Tab.Screen name="lista" component={ListPost} />
            <Tab.Screen name="create post" component={CreatePost} />

        </Tab.Navigator> 
    )
}

export function Navigation() {
    return (
        <NavigationContainer>
           <StackGroup/>
        </NavigationContainer>
    )
}