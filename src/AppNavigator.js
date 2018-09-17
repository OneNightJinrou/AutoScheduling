import React from 'react';
import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

import Top from './Top';
import Create from './Create';

const RootNavigator = createStackNavigator({
  Top: { screen: Top },
  Create: { screen: Create },
});

const MyFooter = createBottomTabNavigator(
    {
        Top: { screen: Top },
        Create: { screen: Create },
    },
    {
        initialRouteName: 'Top',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = 'apps';
              } else if (routeName === 'Settings') {
                iconName = 'camera';
              }
      
              // You can return any component that you like here! We usually use an
              // icon component from react-native-vector-icons
            //   return <Ionicons name={iconName} size={25} color={tintColor} />;
            //   return <Icon name={iconName} size={25} color={tintColor}/>
              return <Text>aaa</Text>
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            // activeBackgroundColor: '#5ab4bd',
            // inactiveBackgroundColor: '#ffffff',
            // style: { borderTopWidth: 2, borderTopColor: '#5ab4bd' },
        }
    }
);


export { RootNavigator, MyFooter };