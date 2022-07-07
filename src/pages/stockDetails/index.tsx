import {Text, View, StyleSheet} from 'react-native';
import { COLORS } from "../../global-styles/colors";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import DetailInvestmentList from './detail-investment-list';
import DetailDividendList from './detail-dividend-list';

export default function StockDetails({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text>hola {route?.params} gai</Text>

            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {fontSize: 12},
                    tabBarStyle: {backgroundColor: '#041b2d', borderRadius: 8},
                    tabBarActiveTintColor: '#deedf2',
                }}
            >
                <Tab.Screen name="DetailInvestmentList" component={DetailInvestmentList} initialParams={{stockId: route?.params}}/>
                <Tab.Screen name="DetailDividendList" component={DetailDividendList} initialParams={{stockId: route?.params}}/>
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkBackground,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
});
