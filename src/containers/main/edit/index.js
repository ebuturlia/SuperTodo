import React, {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import images from '../../../configs/images';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';

import styles from './styles';

function EditScreen(props) {
  const {navigation, route, todos} = props;
  const isEdit = route.params.isEdit;

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [due, setDue] = useState(null);
  const [priority, setPriority] = useState(null);

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
    </ScrollView>
  );
}
const mapStateToProps = ({todos: {todos}}) => ({
  todos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
