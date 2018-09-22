import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class CreateSchedule extends Component {
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
          onPress={() => this.props.navigation.navigate('SettingWorker')}>
          <Text>Go to SettingWorker</Text>
        </Button>
      </View>
    );
  }
}

