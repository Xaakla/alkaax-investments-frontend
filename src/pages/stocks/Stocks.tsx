import {useContext, useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StockList from "./stock-list/StockList";
import DividendList from "./dividend-list/DividendList";
import InvestmentList from "./investment-list/InvestmentList";

import api from '../../services/api';

import {Context} from "../../context/context";

import AppModal from "../../components/AppModal";
import {Modal as ModalContainer} from 'react-native-paper';
import { MODAL } from "../../global-styles/modal";
import { INFO_BOX } from "../../global-styles/info-box";
import { COLORS } from "../../global-styles/colors";

const Tab = createMaterialTopTabNavigator();

export default function Stocks({navigation}) {
    const [newStockCode, setNewStockCode] = useState("");
    const [isStockNewModalVisible, setStockNewModalVisible] = useState(false);
    const showStockNewModel = () => setStockNewModalVisible(true);
    const hideStockNewModal = () => setStockNewModalVisible(false);
    const handleCreateStock = () => {
        api.post('/stocks', {code: newStockCode})
            .then((data) => {
                hideStockNewModal();
            }).catch(err => console.error('Não foi possível salvar ação', err))
    }

    return (
        <>
            <View style={styles.container}>
                <View style={INFO_BOX.infoBoxHeaderView}>
                    <View style={INFO_BOX.infoBoxView}>
                        <Text style={INFO_BOX.infoBoxLabelText}>Saldo total:</Text>
                        <Text style={INFO_BOX.infoBoxText}>
                            R$ 13.599,50
                            <Text style={[INFO_BOX.infoBoxFooterInfoText, {color: COLORS.green}]}> +R$ 1.104,75</Text>
                        </Text>
                    </View>
                    <View style={INFO_BOX.infoBoxFooter}>
                        <View>
                            <Text style={INFO_BOX.infoBoxLabelText}>Média investido/mês:</Text>
                            <Text style={INFO_BOX.infoBoxFooterText}>R$ 2.000,00</Text>
                        </View>
                        <View>
                            <Text style={INFO_BOX.infoBoxLabelText}>Média rendimento/mês:</Text>
                            <Text style={INFO_BOX.infoBoxFooterText}>R$ 125,54</Text>
                        </View>
                    </View>
                </View>

                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: {fontSize: 12},
                        tabBarStyle: {backgroundColor: '#041b2d', borderRadius: 8},
                        tabBarActiveTintColor: '#deedf2',
                    }}
                >
                    <Tab.Screen name="StockList" component={StockList}/>
                    <Tab.Screen name="Investments" component={InvestmentList}/>
                    <Tab.Screen name="Dividends" component={DividendList}/>
                </Tab.Navigator>

                <ActionButton buttonColor="rgba(231,76,60,.7)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Batch Dividend"
                                       onPress={() => navigation.navigate("NewBatchDividend")}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="New Batch Investment"
                                       onPress={() => navigation.navigate("NewBatchInvestment")}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="New Stock" onPress={showStockNewModel}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>

            <AppModal>
                <ModalContainer visible={isStockNewModalVisible} onDismiss={hideStockNewModal} style={MODAL.modalContainer}>
                    <View style={MODAL.modalHeader}>
                        <Text style={MODAL.modalHeaderTitle}>Edit Stock</Text>
                        <TouchableOpacity onPress={hideStockNewModal}>
                            <Icon name="md-close" style={[MODAL.modalHeaderIcon, MODAL.redColor]} />
                        </TouchableOpacity>
                    </View>
                    <View style={MODAL.modalContent}>
                        <TextInput style={MODAL.modalInput} maxLength={12}
                                   onChangeText={(value) => setNewStockCode(value)}
                                   placeholderTextColor={"#9b9fa3"} placeholder={"Stock code"} />
                    </View>
                    <View style={MODAL.modalFooter}>
                        <TouchableOpacity style={MODAL.modalPrimaryBtn} onPress={handleCreateStock}>
                            <Text style={MODAL.modalPrimaryBtnText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </ModalContainer>
            </AppModal>

            {/*<StockModal isEdit={stockModel.id !== null}></StockModal>*/}
            {/*<DeleteInvestmentMoveModal></DeleteInvestmentMoveModal>*/}
        </>
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
    greenColor: {color: '#00f400'},
    redColor: {color: '#e80000'},
    row: {
        flexDirection: "row"
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});
