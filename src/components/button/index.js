import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function Button(props) {
  const {fetching = false, text, onPress, containerStyle, disabled = false} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={fetching ? null : onPress}
      style={[styles.container, containerStyle, disabled && { backgroundColor: 'grey' }]}>
      {fetching ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
