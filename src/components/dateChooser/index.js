import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import * as DateUtils from '../../utils/dateUtils';

import DatePicker from 'react-native-date-picker';

import styles from './styles';

const datePattern = 'DD/MM/YY HH:mm';

const Button = props => {
  const {label, onPress} = props;
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

function DateChooser(props) {
  const {
    buttonLabel,
    date,
    expanded,
    onDateChange,
    onPress,
    containerStyle,
  } = props;

  const timeStamp = useMemo(() => new Date(date).getTime(), [date]);
  const formattedDate = useMemo(
    () => DateUtils.format(timeStamp, datePattern),
    [timeStamp, datePattern],
  );

  return (
    <View style={[containerStyle]}>
      <View style={styles.controlsContainer}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Button label={buttonLabel} onPress={onPress}/>
        <Button label={'Clear'} onPress={() => onDateChange(null)}/>
      </View>
      {expanded && <DatePicker date={date} onDateChange={onDateChange} />}
    </View>
  );
}

export default DateChooser;
