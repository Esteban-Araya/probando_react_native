import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Navigation} from "./components/Navigation"
import {SafeAreaProvider} from "react-native-safe-area-context"
import { UserProvider } from './providers/UserProviders';

export default function App() {
   
  return ( 
    <SafeAreaProvider>
      <UserProvider> 
        <View style={styles.container}>
          <StatusBar style="dark" />
            <Navigation />
        </View>
      </UserProvider>
    </SafeAreaProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
  }, 
  navigator:{
    backgroundColor: "blue",
    alignItems: "center"
  }
});
