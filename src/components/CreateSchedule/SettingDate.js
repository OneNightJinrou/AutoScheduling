import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
    // console.warn(POST_SETTING)
    this.state = {
      markedDates: {},
    };
  }

  static navigationOptions = {
    title: '日付入力',
  };

  onDayPress(day) {
    let markedDates = this.state.markedDates;
    if (day.dateString in markedDates) {
      delete markedDates[day.dateString]
    } else {
      markedDates[day.dateString] = {selected: true, selectedDotColor: 'orange'}
    }

    // オブジェクトのディープコピーの為にシリアライズしてからデシリアライズ（ディープコピーしないと画面描画されない）
    const updatedMarkedDates = JSON.parse(JSON.stringify(markedDates));
    this.setState({
      markedDates: updatedMarkedDates
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
          markedDates={this.state.markedDates}
        />
      </View>
    );
  }
}

