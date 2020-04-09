import React, {useState, useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import images from '../../../configs/images';

import {editTodo, addTodo, deleteTodo} from '../../../actions/todos';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Priority from '../../../components/priority';

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

  const buildBody = () => {
    return {title, description, due, priority};
  };

  const canSave = () => {
    if (isEdit) {
      if (
        (title !== todo.title && title !== null) ||
        (description !== todo.description && description !== null ) ||
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
      'Confirm Delete',
      'Are you sure you want to delete the todo?',
      [
        {text: 'Cancel', onPress: () => {}},
        {
          text: 'Confirm',
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
      headerTitle: isEdit ? 'Edit todo' : 'Create todo',
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
        label={'Title'}
        placeholder={'Title'}
        autoCapitalize={'none'}
        text={title}
        onChange={input => setTitle(input === '' ? null : input)}
        containerStyle={styles.inputMargin}
      />
      <Input
        label={'Description'}
        placeholder={'Description'}
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
        <Button
          fetching={props.fetchingEdit}
          disabled={!canSave()}
          text={'Save'}
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
