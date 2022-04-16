import { ms } from 'react-native-size-matters';
import Color from '../utils/color';

export const tabBarStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  elevation: 0,
  borderTopLeftRadius: ms(45),
  borderTopRightRadius: ms(45),
  borderTopWidth: 0,
  borderColor: Color.MAIN_COLOR,
  borderLeftWidth: ms(4),
  borderRightWidth: ms(4),
  height: ms(75),
  paddingHorizontal: ms(25),
};
