/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

import {RootNavigator, MyTabNavigator} from './src/AppNavigator'

export default class App extends Component {
  render() {
    return (
      <MyTabNavigator />
    );
  }
}

