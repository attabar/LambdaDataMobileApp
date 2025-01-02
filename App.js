import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen  from './src/pages/LoginScreen';
import SignupScreen  from './src/pages/SignupScreen';
import OnboardingScreen from './src/pages/OnboardingScreen';
import { useEffect, useState } from 'react';
import Splash from './splash';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
 
  const [isShowSplash, setIsShowSplash] = useState(true);

  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 5000);
  },[]);

  // useEffect(async () => {
  //   const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //   if(appData == null) {
  //     setIsAppFirstLaunched(true)
  //     AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //   }else {
  //     setIsAppFirstLaunched(false)
  //   }
  // }, [])

  return (
    // isAppFirstLaunched != null && (
      <NavigationContainer>
        { isShowSplash ? (
            <Splash /> 
          ) : ( 
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={"OnboardingScreen"} component={OnboardingScreen} />
              <Stack.Screen name={"LOGIN"} component={LoginScreen} />
              <Stack.Screen name={"SIGNUP"} component={SignupScreen} />
              
            </Stack.Navigator>
        )}
        </NavigationContainer>
    )
  // )
}
