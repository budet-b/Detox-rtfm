import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default class FakeLogin extends React.Component {
  state = {
    username: 'Username',
    password: 'my super password',
    errorDisplay: false
  };

  handleLogin() {
    const isLoginOk =
      this.state.username === 'rtfm' && this.state.password === 'rtfm';
    if (isLoginOk) {
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.setState({errorDisplay: true});
      setTimeout(() => {
        this.setState({errorDisplay: false});
      }, 2000);
    }
  }

  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        testID="fakeLoginView">
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            color: '#000',
          }}
          testID="usernameInput"
          onChangeText={username => this.setState({username})}
          onChange={username => this.setState({username})}
        />
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            paddingTop: 5,
            color: '#000',
          }}
          testID="passwordInput"
          onChangeText={password => this.setState({password})}
          onChange={password => this.setState({password})}
        />
        <TouchableOpacity
          testID="handleLogin"
          onPress={() => this.handleLogin()}>
          <Text>Login</Text>
        </TouchableOpacity>
        {this.state.errorDisplay && (
          <Text testID="errorDisplay" style={{color: '#F40A12'}}>
            Error login
          </Text>
        )}
      </View>
    );
  }
}
