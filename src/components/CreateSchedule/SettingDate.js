import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
    // console.warn(POST_SETTING)

    // tmpRequiredManNumを全て0に設定
    let tmpRequiredManNum = {}
    for (let i in POST_SETTING.workFormList) {
      let name = POST_SETTING.workFormList[i].name
      tmpRequiredManNum[name] = 0
    }
    this.state = {
      markedDates: {},
      selectedDay: "",
      requiredManNum: {}, // それぞれの日付で必要な人数を格納
      tmpRequiredManNum: tmpRequiredManNum, // 必要な人数を使い回せるように人数を記録しておく
      workFormList: POST_SETTING.workFormList,
    };
  }

  static navigationOptions = {
    title: '日付入力',
  };

  onDayPress(day) {
    let markedDates = this.state.markedDates;
    let selectedDay = this.state.selectedDay;
    let requiredManNum = this.state.requiredManNum;
    let day_str = day.dateString
    if (day_str in markedDates) {
      delete markedDates[day_str]
      selectedDay = ""
      delete requiredManNum[day_str]
    } else {
      markedDates[day_str] = {selected: true, selectedDotColor: 'orange'}
      selectedDay = day_str;
      requiredManNum[day_str] = this.state.tmpRequiredManNum
    }

    // オブジェクトのディープコピーの為にシリアライズしてからデシリアライズ（ディープコピーしないと画面描画されない）
    const updatedMarkedDates = JSON.parse(JSON.stringify(markedDates));
    this.setState({
      markedDates: updatedMarkedDates
    });

    this.setState({
      selectedDay: selectedDay
    })

    this.setState({
      requiredManNum: requiredManNum
    })
  }

  render() {
    const selectedDay = this.state.selectedDay;
    let requiredManNum = this.state.requiredManNum;
    let daySetting;

    if (selectedDay) {
      daySetting =
        <View>
          <Text>{selectedDay}</Text>
          {/* 必要人数の表示 */}
          <Text>{JSON.stringify(requiredManNum[selectedDay])}</Text>
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
                  badge={{ value: requiredManNum[selectedDay][l.name], textStyle: { color: 'orange' }, containerStyle: { marginRight: 10 } }}
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

