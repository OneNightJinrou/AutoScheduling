import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView} from 'react-native';
import { Container, Toast } from "native-base";
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements'

export default class SettingWorker extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      inputValue: "",
      inputValueError: false,
      inputErrorMessage: "",
      workerList: [],
      // 以下のような形で格納される
      // workerList = [
      //   {
      //     name: 'Amy Farha',
      //   },
      //   {
      //     name: 'Chris Jackson',
      //   }
      // ]
      nextPageButtonBackgroundColor:'#9E9E9E',
      nextPageErrorMessage: '',
    };
  }
  static navigationOptions = {
    title: '従業員設定',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue: inputValue });
  };
  _addWorker = () => {
    ret = this._isValidTextInput()
    if (ret == false) {
      this.textInput.shake()
      return
    }
    // リストに追加
    this.state.workerList.push({name: this.state.inputValue})
    this.setState({ workerList: this.state.workerList });
    // 入力フォームのテキスト削除
    this.setState({ inputValue: "" });
    this.textInput.clearText();
    // 次ページへ遷移するボタンの色を変更
    this._changeNextPageButtonBackgroundColor()
  };
  _isValidTextInput = () => {
    // フォームの入力が有効かどうかをチェックする関数
    // 有効ならばtrue, 有効でなければfalseを返す
    inputValue = this.state.inputValue
    workerList = this.state.workerList
    // 空白かチェック
    if (inputValue == "") {
      this.setState({ inputValueError: true });
      this.setState({ inputErrorMessage: "入力欄が空欄です" });
      return false
    }
    // 重複チェック 
    for (var i =0, len = workerList.length; i < len; i++) {
      if (inputValue == workerList[i]['name']) {
        // 重複があればfalseを返す
        this.setState({ inputValueError: true });
        this.setState({ inputErrorMessage: "名前が重複しています" });
        return false
      }
    }
    this.setState({ inputValueError: false });
    this.setState({ inputErrorMessage: "" });
    return true
  };
  _delWorker = (i) => {
    // リストから削除
    this.state.workerList.splice(i, 1);
    this.setState({ workerList: this.state.workerList });
    // 次ページへ遷移するボタンの色を変更
    this._changeNextPageButtonBackgroundColor()
  };
  _changeNextPageButtonBackgroundColor = () => {
    // 次ページへ遷移するボタンの色を変更
    len = this.state.workerList.length;
    if (len == 0) {
      this.setState({ nextPageButtonBackgroundColor: '#9E9E9E' });
    } else {
      this.setState({ nextPageButtonBackgroundColor: 'blue' });
    }
  };
  _gotoNextPage = () => {
    len = this.state.workerList.length;
    if (len == 0) {
      this.setState({ nextPageErrorMessage: '従業員を一人以上設定してください' });
      return
    }
    this.setState({ nextPageErrorMessage: '' });
    this.props.navigation.navigate('SettingWorkingForm')
  };

  render() {
    return (
      <ScrollView>
        {/* 従業員名入力 */}
        <Text>従業員の名前を入力してください</Text>
        <FormLabel>Name</FormLabel>
        <FormInput
          ref={textInput => this.textInput = textInput}
          onChangeText={this._handleTextChange}
          underlineColorAndroid="grey"/>
        <FormValidationMessage>{this.state.inputErrorMessage}</FormValidationMessage>
        <Button
          title='追加'
          backgroundColor='blue'
          onPress={this._addWorker}/>
        {/* 従業員名のリスト表示 */}
        <List containerStyle={{marginBottom: 20}}>
          {
            this.state.workerList.map((l, i) => (
              <ListItem
                key={l.name}
                title={l.name}
                rightIcon={{ name: 'delete', type: 'MaterialIcons', style: {color: 'red'} }}
                rightTitle='delete'
                onPressRightIcon={() => this._delWorker(i)}
              />
            ))
          }
        </List>
        {/* 次ページへの遷移 */}
        <Button
          title='完了'
          backgroundColor={this.state.nextPageButtonBackgroundColor}
          onPress={this._gotoNextPage}>
        </Button>
        <FormValidationMessage>{this.state.nextPageErrorMessage}</FormValidationMessage>
      </ScrollView>
    );
  }
}

