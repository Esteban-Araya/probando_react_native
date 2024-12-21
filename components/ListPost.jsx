import { FlatList, StyleSheet, View } from 'react-native';
import { GetPosts } from '../api/posts/getPost'
import {Post} from "./Post"
import { useEffect, useState } from 'react';
import { Loading } from './Loading';

export function ListPost(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getData = async()=>{

       const {data} = await GetPosts() 

       setData(data)  
       setLoading(false)  
    }
 
    useEffect(()=>{
        getData()
    },[])  
 
    
    return(
        <View style={styles.container}>
            {loading ? (
        
                <Loading/>
            ) : (    
                
                <FlatList 
                    data={data}
                    keyExtractor={(user) => user.id} 
                    renderItem={({item}) => <Post user={item} /> }
                />
            )} 
        </View>    
    )
}
 
const styles = StyleSheet.create({
    container: {   
        flex: 1,  

    },
    title: {
      fontSize: 20
    },
    content: {
      fontSize: 14
    }
  });