import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, RefreshControl, TextInput} from "react-native";
import api from '../../../services/api';

import StockModal from "../../../components/stockModal/StockModal";
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from "../../../global-styles/colors";
import { STOCK_CARD_LIST } from "../../../global-styles/stock-card-list";

import {Context} from "../../../context/context";

export default function StockList() {

    const {setStocks, stocks, stocksRefreshing, setStocksRefreshing, refreshStocksList,
        isStockModalVisible, setIsStockModalVisible, stockModel, setStockModel,
        setIsDeleteModalVisible, setTitleDeleteModal} = useContext(Context);

    const showStockModal = () => setIsStockModalVisible(true);
    const hideStockModal = () => setIsStockModalVisible(false);

    const showDeleteModal = (stock: any) => {
        setStockModel(stock)
        setTitleDeleteModal("Tem certeza que deseja deletar a ação '"+stock.code+"'?");
        setIsDeleteModalVisible(true);
    }

    useEffect(() => {
        api.get('/stocks').then(response => {
            setStocks(response?.data);
        }).catch(error => console.error('Items não armazenados no estado: ', error));
    }, [stocksRefreshing]);

    function editStock() {
        api.patch('/stocks', stockModel)
            .then((data) => {
                refreshStocksList();
            }).catch(err => console.error('Não foi possível salvar ação', err));
        setStockModel({id: null, code: ''});
        hideStockModal();
    }

    function openModal(stock: any) {
        setStockModel(stock);
        showStockModal();
    }

    return (
        <>
        <ScrollView style={styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={stocksRefreshing}
                            onRefresh={refreshStocksList}
                        />
                    }>
            {stocks.map(stock => (
                <TouchableOpacity style={STOCK_CARD_LIST.stockCardListContainer} key={stock.id}
                                  onPress={() => openModal(stock)} onLongPress={() => showDeleteModal(stock)}>
                    <Text style={STOCK_CARD_LIST.stockCardListName}>{stock.code}</Text>
                    <Text style={STOCK_CARD_LIST.stockCardListQuotas}>cotas: {stock.quotas}</Text>
                </TouchableOpacity>
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

    // modalContainer: {
    //     backgroundColor: COLORS.secondaryDarkBackground,
    //     paddingHorizontal: 24,
    //     paddingVertical: 16,
    //     width: '80%',
    //     alignSelf: 'center',
    //     borderRadius: 8
    // },
    // modalHeader: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // },
    // modalHeaderTitle: {
    //     color: '#deedf2',
    //     fontSize: 16,
    //     fontWeight: '600'
    // },
    // modalHeaderIcon: {
    //     color: '#deedf2',
    //     fontSize: 18
    // },
    // modalContent: {
    //     marginTop: 12,
    //     marginBottom: 8
    // },
    // modalInput: {
    //     backgroundColor: '#052844',
    //     borderRadius: 8,
    //     paddingHorizontal: 12,
    //     paddingVertical: 5,
    //     color: '#deedf2'
    // },
    // modalFooter: {
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // },
    // modalPrimaryBtn: {
    //     marginTop: 12,
    //     alignSelf: 'flex-end',
    //     borderRadius: 8,
    //     backgroundColor: 'green',
    //     paddingHorizontal: 12,
    //     paddingVertical: 6,
    //     minWidth: 68,
    // },
    // modalPrimaryBtnText: {
    //     color: '#deedf2',
    //     fontWeight: '600',
    //     textAlign: 'center'
    // }
});
