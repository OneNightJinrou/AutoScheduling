import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class SettingWorkingForm extends Component {
  static navigationOptions = {
    title: '勤務形態',
  };
  render() {
    return (
      <Text>
        This is SettingWorkingForm
      </Text>
    );
  }
}

