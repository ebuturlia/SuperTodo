import React, {useEffect, useLayoutEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {logout} from '../../../actions/auth';
import {getTodos} from '../../../actions/todos';

import * as routes from '../../../constants/routes';
import images from '../../../configs/images';

import HeaderButton from '../../../components/headerButton';
import TodoCard from './todoCard';

import styles from './styles';

function HomeScreen(props) {
  const {getTodos, logout, navigation, todos} = props;

  const showLogoutAlert = () =>
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'Confirm', style: 'destructive', onPress: () => logout()},
      ],
      {cancelable: true},
    );

  useEffect(() => {
    getTodos();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Let's do it",
      headerLeft: () => (
        <HeaderButton
          iconSource={images.about}
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
              navigation.navigate(routes.EDIT_SCREEN, {isEdit: true})
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
