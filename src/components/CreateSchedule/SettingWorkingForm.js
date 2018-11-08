import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements';

export default class SettingWorkingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPageButtonBackgroundColor:'#9E9E9E',
    };
    // console.warn(POST_SETTING)
  }
  static navigationOptions = {
    title: '勤務形態設定',
  };

  _gotoNextPage = () => {
    POST_SETTING.workFormList = [
      {
        name: "日勤",
        time: "9:00~17:00"
      },
      {
        name: "準夜勤",
        time: "17:00~25:00"
      },
      {
        name: "夜勤",
        time: "1:00~9:00"
      },
      {
        name: "休み",
        time: "--"
      }
    ]
    this.props.navigation.navigate('SettingDate')
  };

  render() {
    return (
      <View>
        <Text>
          This is SettingWorkingForm.
          日勤、準夜勤、夜勤、休みで入力したものとする。
          入力フォームは後日対応。
        </Text>
        {/* 次ページへの遷移 */}
        <Button
          title='完了'
          backgroundColor={this.state.nextPageButtonBackgroundColor}
          onPress={this._gotoNextPage}>
        </Button>
      </View>
    );
  }
}

