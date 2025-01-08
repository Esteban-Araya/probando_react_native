import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storageSetRefreshToken(refresh_token){
    AsyncStorage.setItem("refresh_token", refresh_token)
}

export async function storageGetRefreshToken(){
    return await AsyncStorage.getItem("refresh_token")
}

export async function storageSetAccessToken(access_token){
    AsyncStorage.setItem("access_token", access_token)
}

export async function storageGetAccessToken(){
    return await AsyncStorage.getItem("access_token")
}
