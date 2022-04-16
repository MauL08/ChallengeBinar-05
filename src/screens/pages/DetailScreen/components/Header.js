import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';
import PushNotification from 'react-native-push-notification';

import { styles } from '../styles/headerStyle';
import { BackIcon, LoveIcon, ShareIcon } from '../../../../assets';
import { getAllBooks } from '../../../../config/api/slice/booksSlice';

const Header = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);

  const onShare = async () => {
    const content = {
      message: 'Credits to the API : ',
      url: 'http://code.aldipee.com/api/v1/books',
    };
    await Share.open(content);
  };

  const onPushNotification = value => {
    PushNotification.localNotification({
      channelId: 'notification-channel',
      title: 'You liked a book.',
      message: value,
    });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => {
          dispatch(getAllBooks(token));
          navigation.navigate('Main');
        }}>
        <Image source={BackIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.interactionContainer}>
        <TouchableOpacity
          style={styles.loveIconContainer}
          onPress={() => onPushNotification(props.title)}>
          <Image source={LoveIcon} style={styles.loveIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconContainer} onPress={onShare}>
          <Image source={ShareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
