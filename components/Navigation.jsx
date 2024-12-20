import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "./Welcome";
import { ListPost } from "./ListPost";
import { Login } from "../screen/Login";

const Stack = createNativeStackNavigator() 

function StackGroup(){
    return (
        <Stack.Navigator initialRouteName="login"  
            screenOptions={()=> ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="feed" component={TabGroup}/>
        </Stack.Navigator>
    )
}
 
const Tab = createBottomTabNavigator();

export function TabGroup() {
    return (
        <Tab.Navigator initialRouteName="welcome">
            <Tab.Screen name="welcome" component={Welcome} />
            <Tab.Screen name="lista" component={ListPost} />
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