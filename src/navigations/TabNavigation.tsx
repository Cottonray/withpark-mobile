import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.place}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'place'} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.community}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'article'} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.setting}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'settings'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
