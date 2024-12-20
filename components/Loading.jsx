import { View, Text, StyleSheet } from "react-native"



export function Loading(){
    return (

    <View style={styles.loading}>
        <Text> Esperando rey </Text>
    </View>

    )
} 

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})