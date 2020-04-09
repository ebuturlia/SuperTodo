import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const getPriorityBackgroundColor = priority => {
  switch (priority) {
    case 1:
    case 2:
    case 3:
      return '#229954';
    case 4:
    case 5:
      return '#E74C3C';
    default:
      return 'white';
  }
};

function Priority(props) {
  const {priority, containerStyle} = props;
  const items = [];
  for (let i = 0; i < priority; i++) {
    items.push(
      <View
        key={String(i)}
        style={[
          styles.item,
          // {backgroundColor: getPriorityBackgroundColor(priority)},
        ]}
      />,
    );
  }
  return <View style={[styles.container, containerStyle]}>{items}</View>;
}

export default Priority;
