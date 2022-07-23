import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, RefreshControl} from "react-native";
import { COLORS } from "../../../global-styles/colors";
import { HISTORIC_CARD } from "../../../global-styles/historic-card";
import api from "../../../services/api";
import Icon from 'react-native-vector-icons/Feather';
import { maskCurrency } from '../../../services/helpers';
import {Context} from "../../../context/context";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function InvestmentList({navigation}) {

    const { globalRefreshing, setGlobalRefreshing } = useContext(Context);

    const [investments, setInvestments] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const refresh = useCallback(() => {
        setRefreshing(true);
        setGlobalRefreshing(true);
        wait(2000).then(() => {
            setRefreshing(false);
            setGlobalRefreshing(false);
        });
    }, []);

    useEffect(() => {
        api.get('/batch-investments/groups').then(response => {
            setInvestments(response?.data);
        }).catch(error => console.error('Items não armazenados no estado: ', error));
    }, [refreshing, globalRefreshing]);

    const calculateQtdMoves = (moves: any[], status: string) => {
        let qtd = 0;
        moves.filter(it => it.status === status).forEach(it => qtd += it.quantity);
        return qtd;
    };
    
    const handleEditBatch = (batch: any) => navigation.navigate("NewBatchInvestment", {batch});

    const gotoStockDetails = (stockId) => navigation.navigate("StockDetails", stockId);

    return (
        <>
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={refresh}
                />
            }
        >
            {investments.map((investment, index) => (
                <View style={HISTORIC_CARD.historicCard} key={`batchInvestment-${investment.name}-${index}-${investment.id}`}>
                    <View style={HISTORIC_CARD.historicCardHeader}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={HISTORIC_CARD.historicTitleText}>{investment.name}</Text>
                            <Icon.Button
                                name="edit"
                                size={16}
                                backgroundColor="transparent"
                                onPress={() => handleEditBatch(investment)}>
                            </Icon.Button>
                        </View>
                        <Text style={[HISTORIC_CARD.historicPriceText, {color: investment.total > 0 ? COLORS.green : COLORS.red}]}>R$ {investment.total}</Text>
                    </View>
                    <View style={HISTORIC_CARD.historicCardBody}>
                        {investment.moves.map((move, index) => (
                            <TouchableOpacity style={HISTORIC_CARD.historicCardItem} key={`moveInvestment-${move.id}`}
                                              onPress={() => gotoStockDetails(move?.stock?.id)} onLongPress={() => {}}>
                                <Text style={HISTORIC_CARD.historicCardItemName}>{move.quantity} - {move.stock.code}</Text>
                                <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ {move.price}</Text>
                                <Text style={{color: move.status === "BUY" ? COLORS.green : COLORS.red}}>R$ {(move.price * move.quantity).toFixed(2)}</Text>
                            </TouchableOpacity>
                        ))}
                        <View style={HISTORIC_CARD.historicCardFooter}>
                            <Text style={[HISTORIC_CARD.historicCardFooterText, {color: COLORS.green}]}>Compradas: {calculateQtdMoves(investment.moves, 'BUY')}</Text>
                            <Text style={[HISTORIC_CARD.historicCardFooterText, {color: COLORS.red}]}>Vendidas: {calculateQtdMoves(investment.moves, 'SELL')}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkBackground,
        paddingVertical: 12
    },
});
