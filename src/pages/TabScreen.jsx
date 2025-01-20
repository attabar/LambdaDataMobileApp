import React from 'react';
import ContactScreen from './ContactScreen';
import HistoryScreen from './HistoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
// https://oblador.github.io/react-native-vector-icons/
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
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          }
          if (route.name === 'Contact') {
            return <FontAwesome name="whatsapp" size={size} color={color} />;
        }
          //  else if (route.name === 'Setting') {
          //   iconName = focused ? 'settings' : 'settings-outline';
          // }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
    </Tab.Navigator>
  );
}
