import React from "react";
import { Formik } from "formik";
import { View, Text, Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { FormikInputValue } from "../components/FormikInput"
import { SinginApi } from "../api/auth/singin";
import { useNavigation } from "@react-navigation/native";
// import { useUserSetContext } from "../providers/UserProviders";

const initialValues = {
    email: "",
    password: ""
}

export function Singin(){
    const Insets = useSafeAreaInsets()
    const navigation = useNavigation()
    // const [loading, setLoading] = useState(true)
    // const setUser = useUserSetContext()

    async function submitSingin(values){
        const { status } = await SinginApi(values) 

        if (status == 201){   
            navigation.navigate("login")
        }
    }  

    function goToLogin(){
        navigation.navigate("login")
    }
    
    return(
        <Formik initialValues={initialValues} onSubmit={values => {
            submitSingin(values)            
            }}>
            {({handleSubmit}) => {
                return(
                    <View style={[styles.singin, {paddingTop: Insets.top + 10}]}>
                        <FormikInputValue
                        name="email"
                        placeholder="E-mail"
                        />
                        <FormikInputValue
                        name="username"
                        placeholder="username"
                        />
                        <FormikInputValue
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        />
                        <FormikInputValue
                        name="password_valid"
                        placeholder="password again"
                        secureTextEntry
                        />
                        <Pressable onPress={handleSubmit}  style={ ({pressed}) => [styles.button_singin, {backgroundColor: pressed ?"blue" : "green"}]}>
                            {({pressed}) => (
                                <Text style={{fontSize: pressed ? 25 : 20}}>Sing In</Text>
                            )}
                        </Pressable>
                        <View style={styles.view}>
                                <Text style={styles.text_login}>If you have an acount you have </Text>
                                <Pressable onPress={goToLogin} >
                                    <Text style={styles.login}>log in</Text>
                                </Pressable>   
                        </View>
                    </View>
                    
                )
            }}
        </Formik>
        
    )
} 

const styles = StyleSheet.create({
    singin: {
      flex: 1,
    },
    cont:{  
        flex: 1, 
        justifyContent: "center",
        alignSelf: "center",
    },
    button_singin:{
        marginTop: 20,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal:10,
        borderRadius: 13
    },
    text_button:{
        fontSize:20
    },
    view:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: "center",
        
    },
    text_login:{
        fontSize:16

    },
    login:{
        fontSize:16,
        color: "blue"
    }
})