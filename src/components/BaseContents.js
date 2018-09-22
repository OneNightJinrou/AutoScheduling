import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class BaseContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 'Apps',
    };
  }
  tabSelect(tab) {
    this.setState({tabSelected: tab})
  }
  isTabActive(tab) {
    return (tab == this.state.tabSelected) ? true : false
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
          <Text>
            This is Content Section
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button
                vertical
                active={this.isTabActive('Apps')}
                onPress={() => this.tabSelect('Apps')}>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button
              vertical
              active={this.isTabActive('Camera')}
              onPress={() => this.tabSelect('Camera')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button
              vertical
              active={this.isTabActive('Navigate')}
              onPress={() => this.tabSelect('Navigate')}>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button
              vertical
              active={this.isTabActive('Person')}
              onPress={() => this.tabSelect('Person')}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
