import {StyleSheet, Text, View} from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StockList from "./stock-list/StockList";
import DividendList from "./dividend-list/DividendList";
import InvestmentList from "./investment-list/InvestmentList";

const Tab = createMaterialTopTabNavigator();

export default function Stocks() {
    return (
        <View style={styles.container}>
            <View style={styles.balanceHeaderView}>
                <View style={styles.balanceView}>
                    <Text style={styles.balanceLabelText}>Saldo total:</Text>
                    <Text style={styles.balanceText}>
                        R$ 13.599,50
                        <Text style={[styles.balanceFooterInfoText, styles.greenColor]}> +R$ 1.104,75</Text>
                    </Text>
                </View>
                <View style={styles.balanceFooter}>
                    <View>
                        <Text style={styles.balanceLabelText}>Média investido/mês:</Text>
                        <Text style={styles.balanceFooterText}>R$ 2.000,00</Text>
                    </View>
                    <View>
                        <Text style={styles.balanceLabelText}>Média rendimento/mês:</Text>
                        <Text style={styles.balanceFooterText}>R$ 125,54</Text>
                    </View>
                </View>
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: '#041b2d', borderRadius: 8 },
                    tabBarActiveTintColor: '#deedf2',

                }}
            >
                <Tab.Screen name="StockList" component={StockList} />
                <Tab.Screen name="Investments" component={InvestmentList} />
                <Tab.Screen name="Dividends" component={DividendList} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04101e',
        paddingHorizontal: 24,
        paddingVertical: 18
    },
    balanceHeaderView: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    balanceView: {
        borderColor: '#033457',
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingHorizontal: 6
    },
    balanceFooter: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    balanceLabelText: {
        color: '#1d5d94',
        fontSize: 12,
        marginBottom: 2
    },
    balanceText: {
        color: '#deedf2',
        fontSize: 24,
        fontWeight: '700'
    },
    balanceFooterText: {
        color: '#deedf2',
        fontSize: 16,
        fontWeight: '500'
    },
    balanceFooterInfoText: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: "center"
    },
    greenColor: { color: '#00f400' },
    redColor: { color: '#e80000' },
    row: {
        flexDirection: "row"
    }
});
