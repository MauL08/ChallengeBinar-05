import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-ratings';
import NumberFormat from 'react-number-format';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/popularStyle';

const PopularBooks = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bookContainer}
      onPress={() => navigation.navigate('Detail', { bookId: props.data.id })}>
      <Image
        source={{ uri: props.data.cover_image }}
        style={styles.bookImage}
      />
      <Text style={styles.bookTitle}>{props.data.title}</Text>
      <Text style={styles.bookAuthor}>{props.data.author}</Text>
      <Text style={styles.bookPublisher}>{props.data.publisher}</Text>
      <View style={styles.bookRating}>
        <Rating
          startingValue={Number(props.data.average_rating) / 2}
          readonly={true}
          imageSize={15}
        />
        <Text style={styles.ratingText}>
          {Number(props.data.average_rating) / 2}
          <Text style={styles.detailedText}>/5</Text>
        </Text>
      </View>
      <NumberFormat
        value={props.data.price}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rp'}
        renderText={value => <Text style={styles.bookPrice}>{value}</Text>}
      />
    </TouchableOpacity>
  );
};

export default PopularBooks;
