import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class SettingWorker extends Component {
  static navigationOptions = {
    title: '従業員設定',
  };
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('SettingWorkingForm')}>
          <Text>Go to SettingWorkingForm</Text>
        </Button>
      </View>
    );
  }
}

