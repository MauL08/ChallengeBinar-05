import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  bookInfo: {
    flexDirection: 'row',
    marginTop: ms(20),
    marginHorizontal: ms(20),
  },
  bookCover: {
    height: ms(250),
    width: ms(170),
    borderWidth: 1,
    borderColor: Color.BACKGROUND_COLOR,
    marginRight: ms(10),
    borderRadius: ms(10),
  },
  bookDetail: {
    marginTop: ms(20),
    marginLeft: ms(5),
    width: ms(150),
  },
  titleBook: {
    fontSize: ms(15),
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    letterSpacing: ms(1),
  },
  authorBook: {
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  author: {
    color: Color.MAIN_COLOR,
  },
  publisher: {
    color: Color.MAIN_COLOR,
  },
  publisherBook: {
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  pagesBook: {
    backgroundColor: Color.MAIN_COLOR,
    padding: ms(3),
    borderRadius: ms(10),
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
