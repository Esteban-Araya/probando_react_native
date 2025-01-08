import React from "react";
import { Formik } from "formik";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { FormikInputValue } from "../components/FormikInput"
import { CreatePostApi } from "../api/posts/createPost";
import * as Location from "expo-location"

const initialValues = {
    email: "",
    password: ""
}

export function CreatePost(){
    const Insets = useSafeAreaInsets()
    // const [loading, setLoading] = useState(true)
    // const setUser = useUserSetContext()

    async function submitCreatePost(values){
        let { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== "granted"){
            console.log("NOP");
            return
        }
        let current = await Location.getCurrentPositionAsync()

        values.latitude = current.coords.latitude
        values.longitude = current.coords.longitude


        
        await CreatePostApi(values) 
    }  
    
    return(
        <Formik initialValues={initialValues} onSubmit={values => {
            submitCreatePost(values)            
            }}>
            {({handleSubmit}) => {
                return( 
                    <View style={[styles.singin]}>
                        <FormikInputValue
                            name="title"
                            placeholder="Title"
                        />
                        <FormikInputValue
                            name="content"
                            placeholder="Content"
                            multiline={true}
                        />
                        <Pressable onPress={handleSubmit}  style={ ({pressed}) => [styles.button_singin, {backgroundColor: pressed ?"blue" : "green"}]}>
                            {({pressed}) => (
                                <Text style={{fontSize: pressed ? 25 : 20}}>Post</Text>
                            )}
                        </Pressable>
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