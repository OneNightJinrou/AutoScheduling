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
      selectedDay: "",
      workFormList: POST_SETTING.workFormList,
    };
  }

  static navigationOptions = {
    title: '日付入力',
  };

  onDayPress(day) {
    let markedDates = this.state.markedDates;
    let selectedDay = this.state.selectedDay;
    if (day.dateString in markedDates) {
      delete markedDates[day.dateString]
      selectedDay = ""
    } else {
      markedDates[day.dateString] = {selected: true, selectedDotColor: 'orange'}
      selectedDay = day.dateString;
    }

    // オブジェクトのディープコピーの為にシリアライズしてからデシリアライズ（ディープコピーしないと画面描画されない）
    const updatedMarkedDates = JSON.parse(JSON.stringify(markedDates));
    this.setState({
      markedDates: updatedMarkedDates
    });

    this.setState({
      selectedDay: selectedDay
    })
  }

  render() {
    const selectedDay = this.state.selectedDay;
    let daySetting;

    if (selectedDay) {
      daySetting =
        <View>
          <Text>{this.state.selectedDay}</Text>
          {/* 勤務形態のリスト表示 */}
          {/* <Text>{JSON.stringify(this.state.workFormList)}</Text> */}
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.workFormList.map((l, i) => (
                <ListItem
                  key={l.name}
                  title={l.name}
                  leftIcon={{ name: 'remove-circle-outline', type: 'MaterialIcons', style: {color: 'blue'} }}
                  rightIcon={{ name: 'add-circle-outline', type: 'MaterialIcons', style: {color: 'red'} }}
                  // rightTitle='delete'
                  badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginRight: 10 } }}
                />
              ))
            }
          </List>
        </View>
    } else {
      daySetting = null
    }

    return (
      <View>
        <Text>
          This is SettingDate
        </Text>
        <Calendar
          onDayPress={this.onDayPress.bind(this)}
          markedDates={this.state.markedDates}
        />
        {daySetting}
      </View>
    );
  }
}

