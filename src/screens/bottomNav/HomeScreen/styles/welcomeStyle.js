import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  welcomeContainer: {
    marginHorizontal: ms(18),
  },
  welcomeText: {
    color: Color.NON_ACTIVE_COLOR,
    letterSpacing: ms(1),
    fontSize: ms(14),
    fontWeight: '500',
    marginBottom: ms(2),
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: ms(3),
    borderRadius: ms(10),
    borderColor: '#D8D8D8',
    backgroundColor: '#D8D8D8',
    height: ms(50),
    padding: ms(10),
    marginTop: ms(15),
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    tintColor: Color.NON_ACTIVE_COLOR,
  },
  searchText: {
    color: Color.DISABLE_BUTTON_COLOR,
    marginLeft: ms(4),
    fontSize: ms(14),
    height: ms(50),
    fontWeight: '500',
    width: ms(250),
  },
  nextIcon: {
    tintColor: Color.MAIN_COLOR,
    marginRight: ms(3),
  },
});
