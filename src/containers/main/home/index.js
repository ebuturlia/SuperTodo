import React from 'react';
import {View, Alert} from 'react-native';
import {connect} from 'react-redux';

import {logout} from '../../../actions/auth';

import * as routes from '../../../constants/routes';
import images from '../../../configs/images';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';

import styles from './styles';

function HomeScreen(props) {
  const {logout, navigation} = props;

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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Let's do it",
      headerLeft: () => (
        <HeaderButton iconSource={images.about} onPress={() => {}} />
      ),
      headerRight: () => (
        <HeaderButton iconSource={images.logout} onPress={showLogoutAlert} />
      ),
    });
  }, [navigation]);
  return <View style={styles.container}></View>;
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
