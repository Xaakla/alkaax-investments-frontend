import { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TextInput} from 'react-native';
import Checkbox from 'expo-checkbox';
import SelectDropdown from 'react-native-select-dropdown';
import CurrencyInput from 'react-native-currency-input';
import { DataTable } from 'react-native-paper';
import { BATCH_STYLES } from "../../global-styles/batch-styles";
import { TABLE } from "../../global-styles/table";
import { BUTTON } from "../../global-styles/button";
import { COLORS } from "../../global-styles/colors";
import api from "../../services/api";
import Icon from 'react-native-vector-icons/Feather';

export default function NewBatchInvestment({ navigation, route }) {

    const [newBatchInvestment, setNewBatchInvestment] = useState<string>(route?.params?.batch?.name || "");
    const [investmentMoves, setInvestmentMoves] = useState([]);
    const [investmentMovesToDelete, setInvestmentMovesToDelete] = useState<number[]>([]);
    const [stocks, setStocks] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuotas, setTotalQuotas] = useState(0);

    useEffect(() => {
        api.get("/stocks")
            .then((response) => {
                setStocks(response.data);
                handleInvestmentMoves();
            }).catch(err => console.error("[GET] - "+err));
    }, []);

    const handleInvestmentMoves = () => {
        if (!route?.params?.batch?.moves) {
            setInvestmentMoves([{
                quantity: 0,
                price: 0,
                status: 'BUY',
                stockId: null,
                batchInvestmentId: null
            }]);
            return;
        }

        const newInvestmentMoves = [];
        route?.params?.batch?.moves.map(it => {
            newInvestmentMoves.push({
                id: it.id,
                quantity: it.quantity,
                price: it.price,
                status: it.status,
                stockId: it.stock.id,
                batchInvestmentId: it.batchInvestment.id
            });
        });

        setInvestmentMoves(newInvestmentMoves);
    }

    const changePrice = (value: number, index: number) => {
        const temp = investmentMoves;
        const obj = {...temp[index], price: value || 0};
        temp[index] = obj;
        setInvestmentMoves([...temp]);
    };

    const changeStock = (stockIndex, investmentMoveIndex) => {
        const temp = investmentMoves;
        const obj = {...temp[investmentMoveIndex], stockId: stocks[stockIndex].id};
        temp[investmentMoveIndex] = obj;
        setInvestmentMoves([...temp]);
    };

    const changeQuantity = (value: number, it: any, investmentMoveIndex: number) => {
        const temp = investmentMoves;
        const obj = {...temp[investmentMoveIndex], quantity: value};
        temp[investmentMoveIndex] = obj;
        setInvestmentMoves([...temp]);
    };

    const changeStatus = (value: boolean, it: any, investmentMoveIndex: number) => {
        const temp = investmentMoves;
        const obj = {...temp[investmentMoveIndex], status: value ? 'BUY' : 'SELL'};
        temp[investmentMoveIndex] = obj;
        setInvestmentMoves([...temp]);
    };

    const newMove = () => {
        setInvestmentMoves([...investmentMoves, {
            quantity: 0,
            price: 0,
            status: 'BUY',
            stockId: null,
            batchInvestmentId: null
        }]);
    };

    const deleteMove = (index: number) => {
        setInvestmentMovesToDelete([...investmentMovesToDelete, investmentMoves[index].id]);
        const temp = investmentMoves;
        temp.splice(index, 1);
        setInvestmentMoves([...temp]);
    };

    const deleteBatch = () => {
        api.delete(`/batch-investments/${route?.params?.batch?.id}`).then(() => {
            navigation.goBack();
        }).catch(err => console.error('erro ao deletar batch'));
    };

    const calculateTotalQuotas = (): number => {
        return investmentMoves.reduce((accumulator, it) => {
            return accumulator + it.quantity;
        }, 0);
    }

    const calculateTotalPrice = (): number => {
        return investmentMoves.reduce((accumulator, it) => {
            return accumulator + (it.price * it.quantity);
        }, 0);
    };

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
        setTotalQuotas(calculateTotalQuotas());
    }, [investmentMoves]);

    const createNewBatchInvestment = () => new Promise((resolve, reject) => {
        api.post('/batch-investments', {id: route?.params?.batch?.id, name: newBatchInvestment})
            .then((response) => resolve(response.data)).catch(() => reject(false));
    });

    const createInvestmentMoves = () => new Promise((resolve, reject) => {
        console.log('createInvestmentMoves', investmentMoves);
        api.post('/investment-move', investmentMoves)
            .then(() => resolve(true)).catch(() => reject(false));
    });

    const onSubmit = () => {
        if (newBatchInvestment.trim() === '' || newBatchInvestment === null || newBatchInvestment === undefined) {
            console.error('[ERROR] - Nome do lote de investimento inválido!');
            return;
        }

        let hasErrors = false;
        investmentMoves.forEach(it => {
            if (it.stockId === null) {
                hasErrors = true;
                return console.error('[ERROR] - Stock ID inválido');
            }
            if (it.status !== 'BUY' && it.status !== 'SELL') {
                hasErrors = true;
                return console.error('[ERROR] - Status do movimento é inválido');
            }
            if (it.price < 0) {
                hasErrors = true;
                return console.error('[ERROR] - Preço inválido')
            }
            if (it.quantity <= 0) {
                hasErrors = true;
                console.error('[ERROR] - Cotas inválidas');
                return;
            }
        });

        if (hasErrors) return;

        createNewBatchInvestment()
            .then((response: any) => {
                investmentMoves.map(it => it.batchInvestmentId = response.id);

                if (investmentMovesToDelete.length > 0) {
                    console.log(`/investment-move?ids=${investmentMovesToDelete}`)
                    api.delete(`/investment-move?ids=${investmentMovesToDelete}`)
                        .then(() => {
                            console.log('alo')
                        }).catch((err) => console.error('[DELETE] - Erro ao deletar movimentos', err));
                }

                createInvestmentMoves().then(() => {
                    navigation.navigate("Investments");
                }).catch(() => console.error('[POST] - Erro ao salvar movimentos de investimento'));
            }).catch(() => console.error('[POST] - Não foi possível criar o lote.'));
    };

    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <TextInput style={BATCH_STYLES.textInput} defaultValue={newBatchInvestment}
                   onChangeText={(value) => setNewBatchInvestment(value)}
                   placeholder={"Nome do lote de investimentos"} placeholderTextColor={COLORS.placeholderText} />

                {route?.params?.batch?.id && (
                    <Icon.Button
                        name="trash-2"
                        size={24}
                        backgroundColor="transparent"
                        onPress={() => deleteBatch()}>
                    </Icon.Button>
                )}
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Stocks List</Text>

                    <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue}]} onPress={() => newMove()}>
                        <Text style={BUTTON.whiteButtonText}>New Move</Text>
                    </TouchableOpacity>
                </View>
                <DataTable style={TABLE.table}>
                    <DataTable.Header>
                        <View style={{minWidth: 48}}>
                            <Text style={[TABLE.tableHeadText, {textAlign: 'center'}]}>Status</Text>
                        </View>
                        <View style={TABLE.tableHeadCell}>
                            <Text style={[TABLE.tableHeadText, {textAlign: 'center'}]}>Cotas</Text>
                        </View>
                        <View style={TABLE.tableHeadCell}>
                            <Text style={[TABLE.tableHeadText, {textAlign: 'center'}]}>Nome</Text>
                        </View>
                        <View style={TABLE.tableHeadCell}>
                            <Text style={[TABLE.tableHeadText, {textAlign: 'right'}]}>Preço (u)</Text>
                        </View>
                    </DataTable.Header>

                    <ScrollView style={TABLE.tableScrollView}>
                        {investmentMoves.map((it, index) => (
                            <TouchableOpacity key={index} onLongPress={() => deleteMove(index)}>
                                <DataTable.Row>
                                    <View style={[{alignItems: 'center', minWidth: 48, justifyContent: 'center'}]}>
                                        <Checkbox
                                            value={it.status === 'BUY'}
                                            onValueChange={(value) => changeStatus(value, it, index)}
                                            style={{}}
                                            color={true ? '#4630EB' : undefined}
                                        />
                                    </View>
                                    <View style={[TABLE.tableBodyCell, {alignItems: 'center'}]}>
                                        <TextInput
                                            style={{flex: 1, color: 'white'}}
                                            keyboardType={'numeric'} maxLength={5}
                                            defaultValue={String(it.quantity)}
                                            onChangeText={(value) => changeQuantity(Number(value), it, index)}>
                                        </TextInput>
                                    </View>
                                    <View style={[TABLE.tableBodyCell, {alignItems: 'center'}]}>
                                        <SelectDropdown
                                            data={stocks.map(it => it.code)}
                                            defaultValueByIndex={stocks.findIndex(stock => stock.id === it.stockId)}
                                            statusBarTranslucent={true}
                                            onSelect={(selectedItem, stockIndex) => changeStock(stockIndex, index)}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                // text represented after item is selected
                                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                return selectedItem
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                // text represented for each item in dropdown
                                                // if data array is an array of objects then return item.property to represent item in dropdown
                                                return item
                                            }}
                                            defaultButtonText={"Escolher"}
                                            buttonStyle={styles.selectBtn}
                                            buttonTextStyle={styles.selectBtnText}
                                        />
                                    </View>
                                    <View style={[TABLE.tableBodyCell, {alignItems: 'flex-end'}]}>
                                        <CurrencyInput
                                            value={it.price}
                                            onChangeValue={(value) => changePrice(value, index)}
                                            prefix="R$"
                                            delimiter="."
                                            separator=","
                                            precision={2}
                                            style={{color: 'white', flex: 1}}
                                        />
                                    </View>
                                </DataTable.Row>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={[styles.row, TABLE.tableFooter]}>
                        <Text style={[TABLE.tableFooterInfoText]}>Total Quotas: {totalQuotas}</Text>
                        <Text style={[TABLE.tableFooterInfoText, {color: COLORS.green}]}>Total Price: R$ {totalPrice}</Text>
                    </View>
                </DataTable>

                <View style={[styles.row, styles.btnView]}>
                    <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue}]} onPress={() => onSubmit()}>
                        <Text style={BUTTON.whiteButtonText}>Save Batch</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    selectBtn: {
        backgroundColor: 'transparent',
        // borderColor: '#033457',
        borderStyle: "solid",
        // borderWidth: 1,
        width: 120,
        borderRadius: 8,
        alignSelf: 'center'
    },
    selectBtnText: {
        color: '#deedf2',
        fontSize: 14,
        fontWeight: '700'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    labelText: {
        color: COLORS.blueText,
        fontSize: 16,
        marginBottom: 2,
    },
    tableContainer: {
        marginTop: 32,
    },
    btnView: {
        justifyContent: 'flex-end',
        paddingTop: 24
    }
});
