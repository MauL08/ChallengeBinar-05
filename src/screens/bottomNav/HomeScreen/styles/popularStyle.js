import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  bookContainer: {
    marginTop: ms(18),
    marginHorizontal: ms(15),
    alignItems: 'center',
    width: ms(140),
  },
  bookImage: {
    height: ms(210),
    width: ms(140),
    borderWidth: ms(1),
    borderColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(10),
  },
  bookTitle: {
    textAlign: 'center',
    marginTop: ms(10),
    width: ms(130),
    fontSize: ms(12),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    backgroundColor: Color.MAIN_COLOR,
    padding: ms(10),
    borderRadius: ms(10),
  },
  bookAuthor: {
    marginTop: ms(4),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  bookPublisher: {
    marginTop: ms(2),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookRating: {
    marginTop: ms(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: Color.DISABLE_BUTTON_COLOR,
    marginLeft: ms(5),
    fontWeight: '500',
    fontSize: ms(12),
  },
  detailedText: {
    color: Color.NON_ACTIVE_COLOR,
  },
  bookPrice: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(4),
    paddingHorizontal: ms(8),
    marginTop: ms(8),
    fontSize: ms(12),
    borderRadius: ms(5),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    letterSpacing: ms(1),
  },
});
