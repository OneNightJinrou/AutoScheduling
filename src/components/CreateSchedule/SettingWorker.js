import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button, List, ListItem} from 'react-native-elements'

export default class SettingWorker extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      inputValue: "",
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
    };
  }
  static navigationOptions = {
    title: '従業員設定',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue: inputValue });
  };
  _addWorker = () => {
    // リストに追加
    this.state.workerList.push({name: this.state.inputValue})
    this.setState({ workerList: this.state.workerList });
    // 入力フォームのテキスト削除
    this.setState({ inputValue: "" });
    this.textInput.clearText();
  };
  _delWorker = (i) => {
    // リストから削除
    this.state.workerList.splice(i, 1);
    this.setState({ workerList: this.state.workerList });
  };
  render() {
    return (
      <View>
        {/* 従業員名入力 */}
        <Text>従業員の名前を入力してください</Text>
        <FormLabel>Name</FormLabel>
        <FormInput
          ref={textInput => this.textInput = textInput}
          onChangeText={this._handleTextChange}
          underlineColorAndroid="grey"/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <Button
          title='追加'
          onPress={this._addWorker}/>
        {/* 従業員名のリスト表示 */}
        <List containerStyle={{marginBottom: 20}}>
          {
            this.state.workerList.map((l, i) => (
              <ListItem
                key={l.name}
                title={l.name}
                rightIcon={{ name: 'user-circle-o', type: 'font-awesome', style: {color: 'blue'} }}
                onPressRightIcon={() => this._delWorker(i)}
              />
            ))
          }
        </List>
        {/* 次ページへの遷移 */}
        <Button
          title='Go to SettingWorkingForm'
          onPress={() => this.props.navigation.navigate('SettingWorkingForm')}>
        </Button>
      </View>
    );
  }
}

