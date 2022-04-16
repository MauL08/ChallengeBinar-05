import { Text, View, Image } from 'react-native';
import React from 'react';

import { styles } from '../styles/bookInfoStyle';

const BookInfo = props => {
  return (
    <View style={styles.bookInfo}>
      <Image
        style={styles.bookCover}
        source={{ uri: props.data.cover_image }}
      />
      <View style={styles.bookDetail}>
        <Text style={styles.titleBook}>{props.data.title}</Text>
        <Text style={styles.authorBook}>
          Created by <Text style={styles.author}>{props.data.author}</Text>
        </Text>
        <Text style={styles.publisherBook}>
          Published by{' '}
          <Text style={styles.publisher}>{props.data.publisher}</Text>
        </Text>
        <Text style={styles.pagesBook}>{props.data.page_count} Pages</Text>
      </View>
    </View>
  );
};

export default BookInfo;
