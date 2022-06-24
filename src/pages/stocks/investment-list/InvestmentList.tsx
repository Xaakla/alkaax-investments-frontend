import React, { useRef, useState, useEffect, useContext } from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, RefreshControl} from "react-native";
import { COLORS } from "../../../global-styles/colors";
import { HISTORIC_CARD } from "../../../global-styles/historic-card";
import api from "../../../services/api";
import {Context} from "../../../context/context";
import {Modal, Portal} from 'react-native-paper';

export default function InvestmentList() {

    const {setInvestments, investments, investmentsRefreshing,
        setInvestmentsRefreshing, refreshInvestmentList} = useContext(Context);

    useEffect(() => {
        api.get('/batch-investments/groups').then(response => {
            setInvestments(response?.data);
        }).catch(error => console.error('Items não armazenados no estado: ', error));
    }, [investmentsRefreshing]);

    const calculateQtdMoves = (moves: any[], status: string) => {
        let qtd = 0;
        moves.filter(it => it.status === status).forEach(it => qtd += it.quantity);
        return qtd;
    };

    return (
        <>
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={investmentsRefreshing}
                    onRefresh={refreshInvestmentList}
                />
            }
        >
            {investments.map(investment => (
                <View style={HISTORIC_CARD.historicCard}>
                    <View style={HISTORIC_CARD.historicCardHeader}>
                        <Text style={HISTORIC_CARD.historicTitleText}>{investment.name}</Text>
                        <Text style={HISTORIC_CARD.historicPriceText}>R$ {investment.total}</Text>
                    </View>
                    <View style={HISTORIC_CARD.historicCardBody}>
                        {investment.moves.map(move => (
                            <TouchableOpacity style={HISTORIC_CARD.historicCardItem} onLongPress={() => {}}>
                                <Text style={HISTORIC_CARD.historicCardItemName}>{move.quantity} - {move.stock.code}</Text>
                                <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ {move.price}</Text>
                                <Text style={HISTORIC_CARD.historicCardItemTotalPrice}>R$ {move.price * move.quantity}</Text>
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
