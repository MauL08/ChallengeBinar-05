import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import PushNotification from 'react-native-push-notification';

import { styles } from './styles/mainStyle';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

import Loading from '../../../components/Loading';
import Header from './components/Header';
import BookInfo from './components/BookInfo';
import Stocks from './components/Stocks';
import Overview from './components/Overview';
import { getBooksByID } from '../../../config/api/slice/booksSlice';

const DetailScreen = ({ route }) => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const { isLoading } = useSelector(state => state.global);
  const token = useSelector(state => state.user.token);
  const bookData = useSelector(state => state.books.booksData);

  useEffect(() => {
    const credential = {
      token: token,
      id: route.params.bookId,
    };
    dispatch(getBooksByID(credential));
    createChannels();
  }, [dispatch, token, route.params.bookId]);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'notification-channel',
      channelName: 'notification',
    });
  };

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    const credential = {
      token: token,
      id: route.params.bookId,
    };
    dispatch(getBooksByID(credential));
    setRefresh(false);
  };

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.main}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }>
          <ScreenStatusBar status={focus} />
          <View>
            <Header title={bookData.title} />
            <BookInfo data={bookData} />
            <Stocks data={bookData} />
            <Overview data={bookData} />
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <NumberFormat
              value={bookData.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp'}
              renderText={value => (
                <Text style={styles.buyButtonText}>Buy for {value}</Text>
              )}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default DetailScreen;
