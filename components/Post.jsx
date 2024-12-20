import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function Post({user}){
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <View key={user.id}>
                <Text style={styles.title}> {user.title} </Text>
                <Text style={[styles.content, {marginLeft: insets.left,marginRight: insets.right}]}> {user.content} </Text>
                <Text></Text>
            </View>
        </View> 
    ) 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    content: {
        fontSize: 16,
    }
});