import { View, FlatList, Text, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

import Loading from '../../../components/Loading';
import Header from './components/Header';
import Welcome from './components/Welcome';
import RecommendBooks from './components/RecommendBooks';
import PopularBooks from './components/PopularBooks';

import { getAllBooks } from '../../../config/api/slice/booksSlice';

const HomeScreen = () => {
  const focus = useIsFocused();
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  const { isLoading } = useSelector(state => state.global);
  const { userInfo, token } = useSelector(state => state.user);
  const bookData = useSelector(state => state.books.booksData);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(getAllBooks(token));
    setRefresh(false);
  };

  useEffect(() => {
    dispatch(getAllBooks(token));
  }, [dispatch, token]);

  if (!isLoading) {
    return (
      <View style={styles.main}>
        <View style={styles.secMain}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            data={bookData.results}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            columnWrapperStyle={{ marginLeft: ms(15) }}
            ListHeaderComponent={() => (
              <>
                <ScreenStatusBar status={focus} />
                <Header />
                <Welcome user={userInfo} />
                <RecommendBooks data={bookData.results} />
                <Text style={styles.popular}>Popular</Text>
              </>
            )}
            renderItem={({ item }) => <PopularBooks data={item} />}
          />
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default HomeScreen;
