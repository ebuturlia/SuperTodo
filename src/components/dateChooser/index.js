import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import TextButton from '../../components/textButton';

import * as DateUtils from '../../utils/dateUtils';

import * as I18n from '../../I18n';

import DatePicker from 'react-native-date-picker';

import styles from './styles';

const datePattern = 'DD/MM/YY HH:mm';

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
        <TextButton label={buttonLabel} onPress={onPress} />
        <TextButton label={I18n.strings('buttons.clear')} onPress={() => onDateChange(null)} />
      </View>
      {expanded && <DatePicker date={date} onDateChange={onDateChange} />}
    </View>
  );
}

export default DateChooser;
