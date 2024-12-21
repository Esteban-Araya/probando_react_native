import { callApi } from "../api";


export function GetPosts(){
    return callApi("/post", "GET")
}