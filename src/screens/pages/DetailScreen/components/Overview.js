import { Text, View } from 'react-native';
import React from 'react';

import { styles } from '../styles/overviewStyle';

const Overview = props => {
  return (
    <View style={styles.description}>
      <Text style={styles.overviewText}>Overview</Text>
      <Text style={styles.textDesc}>{props.data.synopsis}</Text>
    </View>
  );
};

export default Overview;
