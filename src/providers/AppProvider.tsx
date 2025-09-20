import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* 하위 요소 */}
        {children}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppProvider;
