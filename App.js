/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Root } from "native-base";

import BaseContents from './src/components/BaseContents'

export default class App extends Component {
  render() {
    return (
      <Root>
        <BaseContents/>
      </Root>
    );
  }
}
