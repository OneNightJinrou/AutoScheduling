import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Top from './Top';
import Create from './Create';

const RootNavigator = createStackNavigator({
  Top: { screen: Top },
  Create: { screen: Create },
});


export { RootNavigator };