import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as routes from '../constants/routes';
import {connect} from 'react-redux';

import HomeScreen from '../containers/main/home';
import LoginScreen from '../containers/auth/login';

const Stack = createStackNavigator();

const Navigation = props => {
  const {token} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token === null ? (
          <Stack.Screen
            name={routes.LOGIN_SCREEN}
            component={LoginScreen}
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
          />
        ) : (
          <>
            <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth: {token}}) => ({
  token,
});

export default connect(mapStateToProps, null)(Navigation);
