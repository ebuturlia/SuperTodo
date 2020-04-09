import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import TextButton from '../../components/textButton';

import styles from './styles';

const MAX_AMOUNT = 5;
const MIN_AMOUNT = 0;

function Priority(props) {
  const {priority, containerStyle, onChange} = props;
  const items = [];

  let internalPriority = priority;
  if (priority === null) internalPriority = MIN_AMOUNT;
  if (priority <= MIN_AMOUNT) internalPriority = MIN_AMOUNT;
  if (priority >= MAX_AMOUNT) internalPriority = MAX_AMOUNT;

  let activeAmount = internalPriority;

  if (onChange) {
    for (let i = 0; i < MAX_AMOUNT; i++) {
      if (activeAmount > 0) {
        items.push(
          <TouchableOpacity
            onPress={() => onChange(i + 1)}
            key={String(i)}
            style={styles.activeItem}
          />,
        );
        activeAmount--;
      } else {
        items.push(
          <TouchableOpacity
            onPress={() => onChange(i + 1)}
            key={String(i)}
            style={styles.inactiveItem}
          />,
        );
      }
    }
  } else {
    for (let i = 0; i < internalPriority; i++) {
      items.push(<View key={String(i)} style={styles.item} />);
    }
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.boxesContainer}>{items}</View>
      {onChange && (
        <TextButton label={'Clear'} onPress={() => onChange(null)} />
      )}
    </View>
  );
}

export default Priority;
