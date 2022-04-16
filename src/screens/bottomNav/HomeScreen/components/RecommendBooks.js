import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/recommendStyle';

const RecommendBooks = props => {
  const navigation = useNavigation();
  const { data = [] } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setList(prevState => [...data]);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={list
          .sort((a, b) => {
            return b.average_rating - a.average_rating;
          })
          .slice(0, 6)}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.bookContainer(index)}
            onPress={() => navigation.navigate('Detail', { bookId: item.id })}>
            <Image
              source={{ uri: item.cover_image }}
              style={styles.bookCover}
            />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecommendBooks;
