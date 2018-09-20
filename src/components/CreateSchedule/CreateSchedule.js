import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

type Props = {};
export default class CreateSchedule extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{flex:1}}>
            <IndicatorViewPager
              style={{height:200}}
              indicator={this._renderDotIndicator()}>
              <View style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
              </View>
              <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
              </View>
              <View style={{backgroundColor:'#1AA094'}}>
                <Text>page three</Text>
              </View>
            </IndicatorViewPager>
          </View>
        </Content>
      </Container>

    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />
  }
}
