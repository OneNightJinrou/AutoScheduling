import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
    // console.warn(POST_SETTING)
    this.state = {
      selected: {},
    };
  }

  static navigationOptions = {
    title: '日付入力',
  };

  onDayPress(day) {
    let selected = this.state.selected;
    if (day.dateString in selected) {
      delete selected[day.dateString]
    } else {
      selected[day.dateString] = {selected: true, selectedDotColor: 'orange'}
    }

    // オブジェクトのディープコピーの為にシリアライズしてからデシリアライズ（ディープコピーしないと画面描画されない）
    const updatedSelect = JSON.parse(JSON.stringify(selected));
    this.setState({
      selected: updatedSelect
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
          markedDates={this.state.selected}
        />
      </View>
    );
  }
}

