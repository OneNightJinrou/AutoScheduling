import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

import CreateSchedule from './createSchedule/CreateSchedule'
import MySchedule from './mySchedule/MySchedule';

export default class BaseContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 'MySchedule',
    };
  }
  tabSelect(tab) {
    this.setState({tabSelected: tab})
  }
  isTabActive(tab) {
    return (tab == this.state.tabSelected) ? true : false
  }
  renderContent() {
    switch (this.state.tabSelected) {
      case "MySchedule":
        return <MySchedule/>
      case "CreateSchedule":
        return <CreateSchedule/>
      default:
        false
    }
  }

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
        {this.renderContent()}
      </Content>

      <Footer>
        <FooterTab>
          <Button
            vertical
            active={this.isTabActive('MySchedule')}
            onPress={() => this.tabSelect('MySchedule')}>
            <Icon type='FontAwesome' name="calendar" />
            <Text>マイシフト</Text>
          </Button>
          <Button
            vertical
            active={this.isTabActive('CreateSchedule')}
            onPress={() => this.tabSelect('CreateSchedule')}>
            <Icon type='FontAwesome' name="calendar-plus-o" />
            <Text>シフト作成</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    );
  }
}
