import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

import { setNavigator } from './src/navigationRef';
import {Provider as TaskProvider} from './src/context/TaskContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as BookingProvider} from './src/context/BookingContext';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import LoginScreen from './src/screens/LoginScreen';
import TasksScreen from './src/screens/TasksScreen';
import TaskScreen from './src/screens/TaskScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import BookingScreen from './src/screens/BookingScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import ItemScreen from './src/screens/ItemScreen';
import CustomersScreen from './src/screens/CustomersScreen';
import AccountScreen from './src/screens/AccountScreen';

const taskStack = createStackNavigator({
  Tasks: TasksScreen,
  Task : TaskScreen
});
taskStack.navigationOptions = {
  tabBarLabel: "Tasks",
  tabBarIcon: <FontAwesome name="th-list" size={20}/>
};
const today = new Date().toISOString().substring(0, 10);
TasksScreen.navigationOptions = {
  title: `Tasks - ${today}`
};

const bookingStack = createStackNavigator({
  Bookings: BookingsScreen,
  Booking: BookingScreen
});
bookingStack.navigationOptions = {
  title: "Bookings",
  tabBarIcon: <FontAwesome name="book" size={20}/>
};

const inventoryStack = createStackNavigator({
  Inventory: InventoryScreen,
  Item: ItemScreen
});
inventoryStack.navigationOptions = {
  tabBarLabel: "Inventory",
  tabBarIcon: <FontAwesome name="tags" size={20}/>
};

const customerStack = createStackNavigator({
  Customers: CustomersScreen
});
customerStack.navigationOptions = {
  tabBarLabel: "Customers",
  tabBarIcon: <FontAwesome name="users" size={20}/>
}



AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="cog" size={20}/>
}

const switchNavigator = createSwitchNavigator({
  Load: ResolveAuthScreen,
  Login: LoginScreen,
  mainFlow: createBottomTabNavigator({
    TaskStack: taskStack,
    BookingStack: bookingStack,
    InventoryStack: inventoryStack,
    CustomerStack: customerStack,
    Account: AccountScreen
  }),
});


const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <BookingProvider>
      <TaskProvider>
        <AuthProvider>
          <App ref={(navigator)=>{ setNavigator(navigator) }}/>
        </AuthProvider>
      </TaskProvider>
    </BookingProvider>
  );
};