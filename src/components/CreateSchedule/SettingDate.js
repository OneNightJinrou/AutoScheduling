import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements'

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
    // console.warn(POST_SETTING)
  }
  static navigationOptions = {
    title: '日付入力',
  };

  render() {
    return (
      <Text>
        This is SettingDate
      </Text>
    );
  }
}

