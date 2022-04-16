import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: ms(18),
    marginHorizontal: ms(18),
    marginBottom: ms(15),
  },
  images: {
    tintColor: Color.DISABLE_BUTTON_COLOR,
    height: ms(22),
    width: ms(22),
  },
  imagesUser: {
    tintColor: Color.MAIN_COLOR,
    height: ms(30),
    width: ms(30),
  },
});
