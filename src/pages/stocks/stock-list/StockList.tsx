import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, RefreshControl, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from "../../../global-styles/colors";
import {STOCK_CARD_LIST} from "../../../global-styles/stock-card-list";
import {MODAL} from "../../../global-styles/modal";
import {IStockModel} from "../../../interfaces";
import {Context} from "../../../context/context";
import api from '../../../services/api';
import {Modal as ModalContainer, Portal, Provider} from 'react-native-paper';
import AppModal from '../../../components/AppModal';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function StockList({navigation}) {
    const { stockGlobalRefreshing, setStockGlobalRefreshing } = useContext(Context);

    const [refreshing, setRefreshing] = useState(false);
    const refresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const [stocks, setStocks] = useState([]);
    const [stockModel, setStockModel] = useState<IStockModel>({id: null, code: ""});

    const [isStockDelModalVisible, setIsStockDelModalVisible] = useState(false);
    const showStockDelModal = (stock: any) => {
        setStockModel(stock);
        setIsStockDelModalVisible(true);
    };
    const hideStockDelModal = () => setIsStockDelModalVisible(false);

    useEffect(() => {
        api.get('/stocks').then(response => {
            setStocks(response?.data);
        }).catch(error => console.error('Items não armazenados no estado: ', error));
        setStockGlobalRefreshing(false);
    }, [refreshing, stockGlobalRefreshing]);

    const handleDeleteStock = () => {
        api.delete(`/stocks/${stockModel?.id}`)
            .then((response) => {
                refresh();
                hideStockDelModal();
            }).catch(error => console.error("[STOCKS] - " + error));
    }

    const gotoStockDetails = (stockId) => navigation.navigate("StockDetails", stockId)

    return (
        <>
            <ScrollView style={styles.container}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={refresh}
                            />
                        }>
                {stocks.map(stock => (
                    <TouchableOpacity style={STOCK_CARD_LIST.stockCardListContainer} key={stock.id}
                                      onPress={() => gotoStockDetails(stock.id)}
                                      onLongPress={() => showStockDelModal(stock)}>
                        <Text style={STOCK_CARD_LIST.stockCardListName}>{stock.code}</Text>
                        <Text style={STOCK_CARD_LIST.stockCardListQuotas}>cotas: {stock.quotas}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <AppModal>
                <ModalContainer visible={isStockDelModalVisible} onDismiss={hideStockDelModal}>
                    <View style={MODAL.modalContainer}>
                        <View style={MODAL.modalHeader}>
                            <Text style={MODAL.modalHeaderTitle}>Tem certeza que deseja deletar essa ação?</Text>
                        </View>
                        <View style={MODAL.modalFooter}>
                            <TouchableOpacity style={MODAL.modalSecondaryBtn} onPress={() => hideStockDelModal()}>
                                <Text style={MODAL.modalSecondaryBtnText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={MODAL.modalPrimaryBtn} onPress={() => handleDeleteStock()}>
                                <Text style={MODAL.modalPrimaryBtnText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalContainer>
            </AppModal>
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
