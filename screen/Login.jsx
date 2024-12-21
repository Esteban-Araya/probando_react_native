import React from "react";
import { Formik } from "formik";
import { View, Text, Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { FormikInputValue } from "../components/FormikInput"
import { useLogin } from "../api/auth/login";
import { useNavigation } from "@react-navigation/native";
import { useUserSetContext } from "../providers/UserProviders";

const initialValues = {
    email: "",
    password: ""
}

export function Login(){
    const Insets = useSafeAreaInsets()
    const navigation = useNavigation()
    // const [loading, setLoading] = useState(true)
    const setUser = useUserSetContext()

    async function submit(values){

        const { status} = await useLogin(values) 

        if (status == 200){   
            console.log("(values)");
            console.log(values);
            setUser(values)      
            navigation.navigate("feed")

        }
    }  
    
    return(
        <Formik initialValues={initialValues} onSubmit={values => {
            submit(values)            
            }}>
            {({handleSubmit}) => {
                return(
                    <View style={[styles.login, {paddingTop: Insets.top}]}>
                        <FormikInputValue
                        name="email"
                        placeholder="E-mail"
                        />
                        <FormikInputValue
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        />
                        <Pressable onPress={handleSubmit}  style={ ({pressed}) => [styles.button_login, {backgroundColor: pressed ?"blue" : "green"}]}>
                            {({pressed}) => (
                                <Text style={{fontSize: pressed ? 25 : 20}}>Log In</Text>
                            )}
                        </Pressable>
                    </View>
                )
            }}
        </Formik>
    )
} 

const styles = StyleSheet.create({
    login: {
      flex: 1,
    },
    cont:{  
        flex: 1, 
        justifyContent: "center",
        alignSelf: "center",
    },
    button_login:{
        marginTop: 20,
        justifyContent: "center",
        alignSelf: "center",
    },
    text_button:{
        fontSize:20
    }
})