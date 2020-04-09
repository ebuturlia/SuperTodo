import React, {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import images from '../../../configs/images';

import {editTodo, addTodo} from '../../../actions/todos';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';
import Button from '../../../components/button';

import styles from './styles';

function EditScreen(props) {
  const {navigation, route, editTodo, addTodo} = props;
  const isEdit = route.params.isEdit;
  const todo = route.params.todo;

  const [title, setTitle] = useState(todo ? todo.title : null);
  const [description, setDescription] = useState(
    todo ? todo.description : null,
  );
  const [due, setDue] = useState(todo ? todo.due : null);
  const [priority, setPriority] = useState(todo ? todo.priority : null);

  const showDeleteAlert = () =>
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete the todo?',
      [
        {text: 'Cancel', onPress: () => {}},
        {
          text: 'Confirm',
          style: 'destructive',
          onPress: isEdit ? () => {} : () => navigation.goBack(),
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
        onChange={input => setTitle(input)}
        containerStyle={styles.inputMargin}
      />
      <Input
        label={'Description'}
        placeholder={'Description'}
        text={description}
        onChange={input => setDescription(input)}
        containerStyle={styles.inputMargin}
      />
      <View style={styles.buttonContainer}>
        <Button
          fetching={props.fetchingEdit}
          text={'Save'}
          onPress={() =>
            isEdit
              ? editTodo(todo.id, {
                  title,
                  description,
                  due,
                  priority,
                })
              : addTodo({
                  title,
                  description,
                  due,
                  priority,
                })
          }
          containerStyle={styles.inputMargin}
        />
      </View>
    </ScrollView>
  );
}
const mapStateToProps = ({todos: {fetchingEdit}}) => ({
  fetchingEdit,
});

const mapDispatchToProps = {
  editTodo,
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
