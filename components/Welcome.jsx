import { StyleSheet, Text, View } from 'react-native';

export function Welcome(){
    return (
        <View style={styles.container}>
            <View style={styles.cont}>
                <Text style={styles.title}>WELCOME</Text>   
            </View>                  
        </View>
 
    ) 
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,  

    },
    cont:{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },
    title: {
        fontSize: 40,
    }

});