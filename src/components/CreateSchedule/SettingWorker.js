import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button} from 'react-native-elements'

export default class SettingWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  static navigationOptions = {
    title: '従業員設定',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue: inputValue });
    // console.warn(inputValue)
  };
  render() {
    return (
      <View>
        <Text>従業員の名前を入力してください</Text>
        <FormLabel>Name</FormLabel>
        <FormInput
          onChangeText={this._handleTextChange}
          underlineColorAndroid="grey"/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <Text>{this.state.inputValue}</Text>

        <Button
          title='Go to SettingWorkingForm'
          onPress={() => this.props.navigation.navigate('SettingWorkingForm')}>
        </Button>
      </View>
    );
  }
}

