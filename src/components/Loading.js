import React from 'react';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';

import { BookAnimation } from '../assets';
import Color from '../config/utils/color';
import ScreenStatusBar from './ScreenStatusBar';

const Loading = () => {
  const focus = useIsFocused();

  return (
    <>
      <ScreenStatusBar status={focus} />
      <LottieView
        source={BookAnimation}
        autoPlay
        loop
        style={{ backgroundColor: Color.BACKGROUND_COLOR }}
      />
    </>
  );
};

export default Loading;
