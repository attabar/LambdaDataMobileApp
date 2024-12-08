import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen  from './src/pages/LoginScreen';
import SignupScreen  from './src/pages/SignupScreen';
import { useEffect, useState } from 'react';
import Splash from './splash';

const Stack = createStackNavigator();

export default function App() {
 
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 5000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <NavigationContainer>
      { isShowSplash ? (
          <Splash /> 
        ) : ( 
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"LOGIN"} component={LoginScreen} />
            <Stack.Screen name={"SIGNUP"} component={SignupScreen} />
            {/* <Stack.Screen name={"HOME"} component={HomeScreen} />
            <Stack.Screen name={"DASHBOARD"} component={Dashboard} />
            <Stack.Screen name={"DATA"} component={Data} />
            <Stack.Screen name={"BILL"} component={Bill} /> */}
          </Stack.Navigator>
      )}
      </NavigationContainer>
  )
}
