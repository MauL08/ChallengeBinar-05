import { TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/headerStyle';
import { AccountIcon, ListIcon } from '../../../../assets';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={ListIcon} style={styles.images} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={AccountIcon} style={styles.imagesUser} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
