import { callApi } from "../api";

export function CreatePostApi(values){

    const body ={
        content: values.content, 
        title: values.title,
        latitude: values.latitude,
        longitude: values.longitude,
    }

    return callApi("/post", "POST", body)
}