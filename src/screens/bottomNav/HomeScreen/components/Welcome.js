import { Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { SearchIcon, NextArrowIcon } from '../../../../assets';
import { styles } from '../styles/welcomeStyle';
import Color from '../../../../config/utils/color';

const Welcome = props => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome, {props.user.name}!</Text>
      <View style={styles.searchBar}>
        <View style={styles.searchSection}>
          <Image source={SearchIcon} style={styles.searchIcon} />
          <TextInput
            placeholder="Search Books"
            placeholderTextColor={Color.NON_ACTIVE_COLOR}
            style={styles.searchText}
          />
        </View>
        <Image source={NextArrowIcon} style={styles.nextIcon} />
      </View>
    </View>
  );
};

export default Welcome;
