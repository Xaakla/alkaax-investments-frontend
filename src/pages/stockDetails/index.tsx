import {useEffect, useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { INFO_BOX } from "../../global-styles/info-box";
import { COLORS } from "../../global-styles/colors";
import {MODAL} from "../../global-styles/modal";
import DetailInvestmentList from './detail-investment-list';
import DetailDividendList from './detail-dividend-list';
import api from "../../services/api";
import Icon from 'react-native-vector-icons/Feather';
import {Modal as ModalContainer, Portal} from 'react-native-paper';
import AppModal from '../../components/AppModal';
import {Context} from "../../context/context";

const Tab = createMaterialTopTabNavigator();

export default function StockDetails({navigation, route}) {

    const { setGlobalRefreshing } = useContext(Context);

    const [incomeVariableInvestment, setIncomeVariableInvestment] = useState(0);
    const [incomeVariableDividend, setIncomeVariableDividend] = useState(0);
    const [stock, setStock] = useState({id: null, code: '', quotas: 0});
    const [stockName, setStockName] = useState('');

    const [isStockDelModalVisible, setIsStockDelModalVisible] = useState(false);
    const showStockDelModal = () => setIsStockDelModalVisible(true);
    const hideStockDelModal = () => setIsStockDelModalVisible(false);

    useEffect(() => {
        api.get(`/stocks/${route?.params}`)
            .then(({data}) => {
                setStock(data);
                setStockName(data.code);
            }).catch(error => console.error('Items não armazenados no estado: ', error));

        api.get(`/balance-info/variable-income-investment/${route?.params}`)
            .then(({data}) => {
                setIncomeVariableInvestment(data);
            }).catch(error => console.error('Items não armazenados no estado: ', error));

        api.get(`/balance-info/variable-income-dividend/${route?.params}`)
            .then(({data}) => {
                setIncomeVariableDividend(data);
            }).catch(error => console.error('Items não armazenados no estado: ', error));
    }, []);

    const editStock = () => {
        api.patch('/stocks', {...stock, code: stockName})
            .then(() => {
                setGlobalRefreshing(true);
                navigation.goBack();
            }).catch(error => console.error('Items não armazenados no estado: ', error));
    }

    const deleteStock = () => {
        api.delete(`/stocks/${stock.id}`)
            .then(() => {
                setGlobalRefreshing(true);
                navigation.goBack();
            }).catch(error => console.error('Items não armazenados no estado: ', error));
    }

    if (stock.id !== null) {
        return (
            <>
            <View style={styles.container}>
                <View style={INFO_BOX.infoBoxHeaderView}>
                    <View style={[INFO_BOX.infoBoxView, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <TextInput style={INFO_BOX.infoBoxTextInput}
                                   defaultValue={stock.code}
                                   onChangeText={(value) => setStockName(value)} maxLength={12} />
                        <View style={{flexDirection: 'row'}}>
                            <Icon.Button
                                name="trash-2"
                                size={24}
                                backgroundColor="transparent"
                                onPress={() => showStockDelModal()}>
                            </Icon.Button>
                            <Icon.Button
                                name="save"
                                size={24}
                                backgroundColor="transparent"
                                iconStyle={{marginRight: 0}}
                                onPress={() => editStock()}>
                            </Icon.Button>
                        </View>
                    </View>
                    <View style={INFO_BOX.infoBoxFooter}>
                        <View>
                            <Text style={INFO_BOX.infoBoxLabelText}>Cotas:</Text>
                            <Text style={INFO_BOX.infoBoxFooterText}>{stock.quotas}</Text>
                        </View>
                        <View>
                            <Text style={INFO_BOX.infoBoxLabelText}>Capital Investido:</Text>
                            <Text style={INFO_BOX.infoBoxFooterText}>R$ {incomeVariableInvestment.toFixed(2)}</Text>
                        </View>
                        <View>
                            <Text style={INFO_BOX.infoBoxLabelText}>Capital Ganho:</Text>
                            <Text style={[INFO_BOX.infoBoxFooterText, {color: COLORS.green}]}>R$ {incomeVariableDividend.toFixed(2)}</Text>
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
                    <Tab.Screen name="DetailInvestmentList" component={DetailInvestmentList} initialParams={{stockId: stock?.id}}/>
                    <Tab.Screen name="DetailDividendList" component={DetailDividendList} initialParams={{stockId: stock?.id}}/>
                </Tab.Navigator>
            </View>

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
                            <TouchableOpacity style={MODAL.modalPrimaryBtn} onPress={() => deleteStock()}>
                                <Text style={MODAL.modalPrimaryBtnText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalContainer>
            </AppModal>
            </>
        );
    } else return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkBackground,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
});
