import { callFetch } from "../api";


export function GetPosts(){
    return callFetch("/post", "GET")
}