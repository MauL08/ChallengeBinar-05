import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { ms } from 'react-native-size-matters';

import Color from '../../../config/utils/color';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { setLogout } from '../../../config/api/slice/userSlice';

const ProfileScreen = () => {
  const { userInfo } = useSelector(state => state.user);
  const focus = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} />
      <Text style={styles.textGreet}>Hello, {userInfo.name}</Text>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          dispatch(setLogout());
          navigation.navigate('Login');
        }}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  textGreet: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontSize: ms(14),
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: ms(10),
    paddingVertical: ms(12),
    paddingHorizontal: ms(30),
    backgroundColor: Color.MAIN_COLOR,
    borderRadius: ms(10),
  },
  logoutText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(14),
    fontWeight: 'bold',
  },
});
