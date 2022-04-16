import { ScrollView, Text } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

import VideoScreen from './components/VideoScreen';
import MusicPlayer from './components/MusicPlayer';
import ImageViewer from './components/ImageViewer';
import PDFViewer from './components/PDFViewer'; //Ignore all log notifications

const BooksScreen = () => {
  const focus = useIsFocused();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenStatusBar status={focus} />
      <Text style={styles.title}>Media Handling</Text>
      <VideoScreen />
      <MusicPlayer />
      <ImageViewer />
      <PDFViewer />
    </ScrollView>
  );
};

export default BooksScreen;
