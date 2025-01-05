import React from 'react';
import Data from './Data';
import Airtime from './Airtime';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Setting from './Setting';
import Fund from './Fund';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utility/colors';
// import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Data') {
            iconName = focused ? 'cloud' : 'wifi-outline';
          } else if (route.name === 'Airtime') {
            iconName = focused ? 'phone-portrait' : 'phone-portrait-outline';
          }
          else if (route.name === 'Fund') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }
           else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="Data" component={Data} />
      <Tab.Screen name="Airtime" component={Airtime} />
      <Tab.Screen name="Fund" component={Fund} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
