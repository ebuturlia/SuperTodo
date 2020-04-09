import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import * as DateUtils from '../../../../utils/dateUtils';

import Priority from '../../../../components/priority';

import styles from './styles';

const datePattern = 'DD/MM/YY HH:mm';

function TodoCard(props) {
  const {onPress, containerStyle, ...todo} = props;
  const {title, description, due, priority} = todo;

  const timeStamp = useMemo(() => new Date(due).getTime(), [due]);
  const formattedDate = useMemo(
    () => DateUtils.format(timeStamp, datePattern),
    [timeStamp, datePattern],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.due}>{formattedDate}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      {priority && (
        <Priority
          priority={priority}
          containerStyle={styles.priorityContainer}
        />
      )}
    </TouchableOpacity>
  );
}

export default TodoCard;
