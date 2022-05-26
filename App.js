import React from "react";
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "./src/pages/home/Home";
import Stocks from "./src/pages/stocks/Stocks";
import NewBatchInvestment from "./src/pages/newBatchInvestment/NewBatchInvestment";
import NewBatchDividend from "./src/pages/newBatchDividend/NewBatchDividend";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Alkaax Investments',
          }}
        />
        <Stack.Screen
          name="Stocks"
          component={Stocks}
          options={{
            title: 'My Stocks',
          }}
        />
        <Stack.Screen
          name="NewBatchInvestment"
          component={NewBatchInvestment}
          options={{
            title: 'New Batch Investment',
          }}
        />
        <Stack.Screen
          name="NewBatchDividend"
          component={NewBatchDividend}
          options={{
            title: 'New Batch Dividend',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

