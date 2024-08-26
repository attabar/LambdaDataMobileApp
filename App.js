import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/OnboardingScreen';
import LoginScreen from './src/pages/LoginScreen';
import SignupScreen from './src/pages/SignupScreen';
import Dashboard from './src/pages/Dashboard';
import Data from './src/pages/Data';

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep splash screen visible while loading resources
        await SplashScreen.preventAutoHideAsync();

        // Load fonts or other assets
        await Font.loadAsync(Entypo.font);

        // Optional delay for demonstration (remove in production)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Indicate that the app is ready
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide splash screen when the app is ready
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;  // Don't render anything until the app is ready
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"HOME"} component={HomeScreen} />
          <Stack.Screen name={"LOGIN"} component={LoginScreen} />
          <Stack.Screen name={"SIGNUP"} component={SignupScreen} />
          <Stack.Screen name={"DASHBOARD"} component={Dashboard} />
          <Stack.Screen name={"DATA"} component={Data} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
