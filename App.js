import React from "react";
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import { Provider} from 'react-native-paper';

import Home from "./src/pages/home/Home";
import Stocks from "./src/pages/stocks/Stocks";
import NewBatchInvestment from "./src/pages/newBatchInvestment/NewBatchInvestment";
import NewBatchDividend from "./src/pages/newBatchDividend/NewBatchDividend";
import StockDetails from './src/pages/stockDetails';

import ContextProvider from './src/context/context';
import Signin from "./src/pages/signin";
import Signup from "./src/pages/signup";

const Stack = createStackNavigator();

const headerOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#04101e'
  },
  headerTintColor: '#deedf2',
  headerTitleStyle: {
    textAlign: 'center'
  }
}

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#04101e" animated={true} barStyle='default' />
    <NavigationContainer>
      <ContextProvider>
        <Provider>
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ title: 'Entrar', headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: 'Cadastro', headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Alkaax Investments', headerLeft: () => (<></>), ...headerOptions }}
            />
            <Stack.Screen
              name="Stocks"
              component={Stocks}
              options={{ title: 'My Stocks', ...headerOptions }}
            />
            <Stack.Screen
              name="NewBatchInvestment"
              component={NewBatchInvestment}
              options={{ title: 'New Batch Investment', ...headerOptions }}
            />
            <Stack.Screen
              name="NewBatchDividend"
              component={NewBatchDividend}
              options={{ title: 'New Batch Dividend', ...headerOptions }}
            />
            <Stack.Screen
              name="StockDetails"
              component={StockDetails}
              options={{ title: 'Stock Details', ...headerOptions }}
            />
          </Stack.Navigator>
        </Provider>
      </ContextProvider>
    </NavigationContainer>
    </>
  );
}

