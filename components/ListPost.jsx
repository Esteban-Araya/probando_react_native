import { RefreshControl, FlatList, StyleSheet, View, Alert } from 'react-native';
import { GetPosts } from '../api/posts/getPost'
import {Post} from "./Post"
import { useEffect, useState, useCallback } from 'react';
import { Loading } from './Loading';

export function ListPost(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const getData = async()=>{

       const {data} = await GetPosts() 

       setData(data)  
       setLoading(false)  
    }
 
    useEffect(()=>{
        getData()
    },[])  
 
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        
        await getData()
        
        setRefreshing(false);

      }, []);

    return(
        <View style={styles.container}>
            {loading ? (
        
                <Loading/>
            ) : (    
                
                <FlatList 
                    data={data}
                    keyExtractor={(user) => user.id} 
                    renderItem={({item}) => <Post user={item} /> }
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
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