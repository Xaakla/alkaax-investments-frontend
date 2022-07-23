import { useState, useEffect, useCallback } from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, RefreshControl} from "react-native";
import { COLORS } from "../../../global-styles/colors";
import { HISTORIC_CARD } from "../../../global-styles/historic-card";
import api from "../../../services/api";
import Icon from 'react-native-vector-icons/Feather';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function DetailDividendList({navigation, route}) {

    const [dividends, setDividends] = useState([]);
    const [dividendsRefreshing, setDividendsRefreshing] = useState(false);

    const refreshDividendList = useCallback(() => {
        setDividendsRefreshing(true);
        wait(2000).then(() => setDividendsRefreshing(false));
    }, []);

    useEffect(() => {
        api.get(`/batch-dividends/groups/${route?.params.stockId}`).then(response => {
            setDividends(response?.data);
        }).catch(error => console.error('Items não armazenados no estado: ', error));
    }, [dividendsRefreshing]);

    const handleEditBatch = (batch: any) => navigation.navigate("NewBatchDividend", {batch});

    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={dividendsRefreshing}
                    onRefresh={refreshDividendList}
                />
            }
        >
            {dividends.map((div, index) => (
                <View style={HISTORIC_CARD.historicCard} key={`batchDividend-${div.name}-${index}-${div.id}`}>
                    <View style={HISTORIC_CARD.historicCardHeader}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={HISTORIC_CARD.historicTitleText}>{div.name}</Text>
                            <Icon.Button
                                name="edit"
                                size={16}
                                backgroundColor="transparent"
                                onPress={() => handleEditBatch(div)}>
                            </Icon.Button>
                        </View>
                        <Text style={[HISTORIC_CARD.historicPriceText, {color: div.total > 0 ? COLORS.green : COLORS.red}]}>R$ {div.total}</Text>
                    </View>
                    <View style={HISTORIC_CARD.historicCardBody}>
                        {div.moves.map((move, index) => (
                            <TouchableOpacity style={HISTORIC_CARD.historicCardItem} key={`moveDividend-${move.id}`}>
                                <Text style={HISTORIC_CARD.historicCardItemName}>{move.quantity} - {move.stock.code}</Text>
                                <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ {move.price}</Text>
                                <Text style={HISTORIC_CARD.historicCardItemTotalPrice}>R$ {(move.price * move.quantity).toFixed(2)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkBackground,
        paddingVertical: 12
    }
});
