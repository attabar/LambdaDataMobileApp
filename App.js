import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/homeScreen';
import LoginScreen from './src/screen/loginScreen';
import SignupScreen from './src/screen/SignupScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={"HOME"} component={HomeScreen}/>
        <Stack.Screen name={"LOGIN"} component={LoginScreen}/>
        <Stack.Screen name={"SIGNUP"} component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}



const styles = StyleSheet.create({});
