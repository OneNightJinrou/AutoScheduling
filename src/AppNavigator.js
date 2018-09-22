import React from 'react';
import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

import Top from './components/Top/Top';
import CreateSchedule from './components/CreateSchedule/CreateSchedule';
import SettingWorker from './components/CreateSchedule/SettingWorker';
import SettingWorkingForm from './components/CreateSchedule/SettingWorkingForm';

const CreateScheduleNavigator = createStackNavigator(
{
  CreateSchedule: { screen: CreateSchedule },
  SettingWorker: { screen: SettingWorker },
  SettingWorkingForm: { screen: SettingWorkingForm },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#f4511e',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  }
});

const MyTabNavigator = createBottomTabNavigator(
  {
    Top: {
      screen: Top,
      navigationOptions: {
          tabBarLabel: 'マイシフト',
      }
    },
    Create: {
      screen: CreateScheduleNavigator,
      navigationOptions: {
          tabBarLabel: 'シフト作成',
      }
    },
  },
  {
    initialRouteName: 'Top',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Top') {
          iconName = 'calendar';
        } else if (routeName === 'Create') {
          iconName = 'calendar-plus-o';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon type='FontAwesome' name={iconName} style={{color: tintColor}}/>
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


export { CreateScheduleNavigator, MyTabNavigator };