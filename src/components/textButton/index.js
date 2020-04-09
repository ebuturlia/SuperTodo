import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const TextButton = props => {
  const {label, onPress} = props;
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;