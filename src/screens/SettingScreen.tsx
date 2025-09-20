import { Button, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/types';
import Routes from '../navigations/routes';

const SettingScreen = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Button
        title={'로그아웃'}
        onPress={() => {
          navigator.reset({
            index: 0,
            routes: [{ name: Routes.login }],
          });
        }}
      />
    </View>
  );
};

export default SettingScreen;
