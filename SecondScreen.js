import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        testID="secondScreenView">
        <Text>Hello second screen</Text>
        <TouchableOpacity
          testID="goBackButton"
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="showLoginButton"
          onPress={() => this.props.navigation.navigate('FakeLogin')}>
          <Text>Show login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
