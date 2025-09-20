import { Button, StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigations/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/types';

const LoginScreen = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>

      <Button
        title={'카카오 로그인'}
        onPress={() => {
          // 카카오 로그인
          navigator.reset({
            index: 0,
            routes: [{ name: Routes.main }],
          });
        }}
      />

      <Button
        title={'네이버 로그인'}
        onPress={() => {
          // 네이버 로그인
          navigator.reset({
            index: 0,
            routes: [{ name: Routes.main }],
          });
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
