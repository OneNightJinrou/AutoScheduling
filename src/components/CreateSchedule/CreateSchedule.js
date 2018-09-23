import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements'

export default class CreateSchedule extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'シフト作成',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    return (
      <View>
        <Button 
          title='Go to SettingWorker'
          onPress={() => this.props.navigation.navigate('SettingWorker')}
          />
      </View>
    );
  }
}
