import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        testID="homeScreenView"
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text testID="text-helloRTFM">Hello RTFM !</Text>
        <TouchableOpacity
          testID="secondScreenButton"
          onPress={() => this.props.navigation.navigate('SecondScreen')}>
          <Text>Touch me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
