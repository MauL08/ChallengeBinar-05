import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  container: {
    marginTop: ms(16),
  },
  textTitle: {
    color: Color.DISABLE_BUTTON_COLOR,
    letterSpacing: ms(1),
    fontSize: ms(16),
    fontWeight: 'bold',
    marginLeft: ms(18),
  },
  bookContainer: index => ({
    marginTop: ms(14),
    marginRight: ms(20),
    marginLeft: index === 0 ? ms(18) : ms(0),
  }),
  bookCover: {
    height: ms(200),
    width: ms(130),
    borderWidth: ms(1),
    borderColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(10),
  },
  bookTitle: {
    marginTop: ms(10),
    width: ms(130),
    fontSize: ms(12),
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
  },
  bookAuthor: {
    marginTop: ms(2),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: '500',
    fontSize: ms(11),
  },
});
