import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../../actions/auth';
import images from '../../../configs/images';
import Input from '../../../components/input';
import Button from '../../../components/button';

import styles from './styles';

function LoginScreen(props) {

  const {login, errorMessage} = props;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps={'handled'}
      bounces={false}>
      <View
        style={styles.imageContainer}>
        <Image
          source={images.success}
          style={styles.image}
        />
      </View>
      <View style={styles.userForm}>
        <Input
          label={'Username'}
          placeholder={'Username'}
          autoCapitalize={'none'}
          text={userName}
          onChange={input => setUserName(input)}
          containerStyle={styles.inputMargin}
        />
        <Input
          label={'Password'}
          placeholder={'Password'}
          text={password}
          onChange={input => setPassword(input)}
          containerStyle={styles.inputMargin}
          secure={true}
        />
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          fetching={props.fetching}
          disabled={!userName || !password}
          text={'Log In'}
          onPress={() => login(userName, password)}
          containerStyle={styles.inputMargin}
        />
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ auth: { fetchingLogin, errorCode, errorMessage } }) => ({
  fetching: fetchingLogin,
  errorCode,
  errorMessage
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
