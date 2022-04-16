import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { styles } from './styles';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

const SettingScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default SettingScreen;
