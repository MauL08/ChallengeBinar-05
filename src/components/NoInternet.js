import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import { ms } from 'react-native-size-matters';
import NetInfo from '@react-native-community/netinfo';

import { goBack } from '../config/router/Navigate';
import { NoInternetAnimation } from '../assets';
import ScreenStatusBar from './ScreenStatusBar';
import Color from '../config/utils/color';

const NoInternet = () => {
  const [refresh, setRefresh] = useState(false);
  const focus = useIsFocused();

  const connection = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        goBack();
      }
    });
  };

  const onRefresh = () => {
    connection();
    setRefresh(true);
    setRefresh(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <ScreenStatusBar status={focus} />
      <LottieView source={NoInternetAnimation} autoPlay loop />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please Check your{' '}
          <Text style={styles.textGuide}>Internet Connection</Text>
        </Text>
        <Text style={styles.scrollText}>(Scroll to Refresh)</Text>
      </View>
    </ScrollView>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ms(120),
  },
  text: {
    fontSize: ms(16),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: ms(10),
  },
  textGuide: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
  },
  scrollText: {
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: '500',
    fontSize: ms(12),
  },
});
