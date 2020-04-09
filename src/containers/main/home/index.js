import React, {useEffect, useLayoutEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {logout} from '../../../actions/auth';
import {getTodos} from '../../../actions/todos';

import * as routes from '../../../constants/routes';
import images from '../../../configs/images';

import * as I18n from '../../../I18n';

import HeaderButton from '../../../components/headerButton';
import TodoCard from './todoCard';

import styles from './styles';

function HomeScreen(props) {
  const {getTodos, logout, navigation, todos} = props;

  const showLogoutAlert = () =>
    Alert.alert(
      I18n.strings('logout.title'),
      I18n.strings('logout.description'),
      [
        {text: I18n.strings('buttons.cancel'), onPress: () => {}},
        {text: I18n.strings('buttons.confirm'), style: 'destructive', onPress: () => logout()},
      ],
      {cancelable: true},
    );

  useEffect(() => {
    getTodos();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: I18n.strings('screens.home.title'),
      headerLeft: () => (
        <HeaderButton
          iconSource={images.plus}
          onPress={() =>
            navigation.navigate(routes.EDIT_SCREEN, {isEdit: false})
          }
        />
      ),
      headerRight: () => (
        <HeaderButton iconSource={images.logout} onPress={showLogoutAlert} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoCard
            {...item}
            onPress={() =>
              navigation.navigate(routes.EDIT_SCREEN, {isEdit: true, todo: item})
            }
            containerStyle={styles.itemContainer}
          />
        )}
      />
    </View>
  );
}
const mapStateToProps = ({todos: {todos}}) => ({
  todos,
});

const mapDispatchToProps = {
  logout,
  getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
