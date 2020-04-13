import React, {useState, useEffect} from 'react';
import {View, Alert, ScrollView, Keyboard} from 'react-native';

import {connect} from 'react-redux';

import images from '../../../configs/images';

import {editTodo, addTodo, deleteTodo} from '../../../actions/todos';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Priority from '../../../components/priority';
import DateChooser from '../../../components/dateChooser';

import * as I18n from '../../../I18n';

import styles from './styles';

function EditScreen(props) {
  const {navigation, route, editTodo, addTodo, deleteTodo} = props;
  const isEdit = route.params.isEdit;
  const todo = route.params.todo;

  const [title, setTitle] = useState(todo ? todo.title : null);
  const [description, setDescription] = useState(
    todo ? todo.description : null,
  );
  const [due, setDue] = useState(todo ? todo.due : null);
  const [priority, setPriority] = useState(todo ? todo.priority : null);
  const [showPicker, showDatePicker] = useState(false);

  const buildBody = () => {
    return {title, description, due, priority};
  };

  const canSave = () => {
    if (isEdit) {
      if (
        (title !== todo.title && title !== null) ||
        (description !== todo.description && description !== null) ||
        due !== todo.due ||
        priority !== todo.priority
      ) {
        return true;
      }
    } else {
      if (title !== null && description !== null) {
        return true;
      }
    }
    return false;
  };

  const showDeleteAlert = () =>
    Alert.alert(
      I18n.strings('delete.title'),
      I18n.strings('delete.description'),
      [
        {text: I18n.strings('buttons.cancel'), onPress: () => {}},
        {
          text: I18n.strings('buttons.confirm'),
          style: 'destructive',
          onPress: isEdit
            ? () => {
                deleteTodo(todo.id);
                navigation.goBack();
              }
            : () => navigation.goBack(),
        },
      ],
      {cancelable: true},
    );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEdit ? I18n.strings('screens.edit.title') : I18n.strings('screens.add.title'),
      headerRight: () => (
        <HeaderButton iconSource={images.declined} onPress={showDeleteAlert} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps={'handled'}
      bounces={false}>
      <Input
        label={I18n.strings('labels.title')}
        placeholder={I18n.strings('labels.title')}
        autoCapitalize={'none'}
        text={title}
        onChange={input => setTitle(input === '' ? null : input)}
        containerStyle={styles.inputMargin}
      />
      <Input
        label={I18n.strings('labels.description')}
        placeholder={I18n.strings('labels.description')}
        text={description}
        onChange={input => setDescription(input === '' ? null : input)}
        containerStyle={styles.inputMargin}
      />
      <Priority
        priority={priority}
        onChange={value => setPriority(value)}
        containerStyle={styles.priorityContainer}
      />
      <View style={styles.buttonContainer}>
        <DateChooser
          date={new Date(due)}
          expanded={showPicker}
          onDateChange={date => setDue(date)}
          onPress={() => {
            showDatePicker(!showPicker);
            Keyboard.dismiss();
          }}
          buttonLabel={showPicker ? I18n.strings('buttons.done') : I18n.strings('buttons.change')}
          containerStyle={styles.inputMargin}
        />
        <Button
          fetching={props.fetchingEdit}
          disabled={!canSave()}
          text={I18n.strings('buttons.save')}
          onPress={() => {
            isEdit ? editTodo(todo.id, buildBody()) : addTodo(buildBody());
            navigation.goBack();
          }}
          containerStyle={styles.inputMargin}
        />
      </View>
    </ScrollView>
  );
}
const mapStateToProps = ({todos: {fetchingEdit, deleteSuccess}}) => ({
  fetchingEdit,
  deleteSuccess,
});

const mapDispatchToProps = {
  editTodo,
  addTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
