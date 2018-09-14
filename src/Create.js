import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

type Props = {};
export default class Create extends Component<Props> {
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
            This is Create
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.push('Top')}>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.push('Create')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active onPress = {()=>console.warn("Navigate pressed!")}>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical onPress = {()=>console.warn("person pressed!")}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

