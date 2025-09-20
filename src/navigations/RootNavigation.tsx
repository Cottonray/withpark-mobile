import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.login}>
      <Stack.Screen
        name={Routes.main}
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
