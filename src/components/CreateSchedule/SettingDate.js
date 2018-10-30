import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
    // console.warn(POST_SETTING)
    this.state = {};
  }
  static navigationOptions = {
    title: '日付入力',
  };

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render() {
    return (
      <View>
        <Text>
          This is SettingDate
        </Text>
        <Calendar
          onDayPress={this.onDayPress.bind(this)}
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
      </View>
    );
  }
}

