import {useState, useEffect} from 'react';
import React, {View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CurrencyInput from 'react-native-currency-input';
import { DataTable } from 'react-native-paper';
import { BATCH_STYLES } from "../../global-styles/batch-styles";
import { TABLE } from "../../global-styles/table";
import { BUTTON } from "../../global-styles/button";
import { COLORS } from "../../global-styles/colors";
import api from "../../services/api";

export default function NewBatchDividend({ navigation, route }) {

    const [newBatchDividend, setNewBatchDividend] = useState<string>(route?.params?.batch?.name || "");
    const [divMoves, setDivMoves] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuotas, setTotalQuotas] = useState(0);

    useEffect(() => {
        api.get("/stocks")
            .then((response) => {
                setStocks(response.data);
                console.log('alo', route?.params?.batch?.moves)
                handleDividendMoves();
            }).catch(err => console.error("[GET] - "+err));
    }, []);

    const handleDividendMoves = () => {
        if (!route?.params?.batch?.moves) {
            setDivMoves([{
                quantity: 0,
                price: 0,
                stockId: null,
                batchDividendId: null
            }]);
            return;
        }

        const newDividendMoves = [];
        route?.params?.batch?.moves.map(it => {
            newDividendMoves.push({
                id: it.id,
                quantity: it.quantity,
                price: it.price,
                stockId: it.stock.id,
                batchDividendId: it.batchDividend.id
            });
        });

        setDivMoves(newDividendMoves);
    }

    const newMove = () => {
        setDivMoves([...divMoves, {
            quantity: 0,
            price: 0,
            stockId: null,
            batchDividendId: null
        }]);
    };

    const calculateTotalQuotas = (): number => {
        return divMoves.reduce((accumulator, it) => {
            return accumulator + it.quantity;
        }, 0);
    }

    const calculateTotalPrice = (): number => {
        return divMoves.reduce((accumulator, it) => {
            return accumulator + (it.price * it.quantity);
        }, 0);
    };

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
        setTotalQuotas(calculateTotalQuotas());
    }, [divMoves]);

    const changeQuantity = (value: number, it: any, investmentMoveIndex: number) => {
        const temp = divMoves;
        const obj = {...temp[investmentMoveIndex], quantity: value};
        temp[investmentMoveIndex] = obj;
        setDivMoves([...temp]);
    };

    const changeStock = (stockIndex, investmentMoveIndex) => {
        const temp = divMoves;
        const obj = {...temp[investmentMoveIndex], stockId: stocks[stockIndex].id};
        temp[investmentMoveIndex] = obj;
        setDivMoves([...temp]);
    };

    const changePrice = (value: number, index: number) => {
        const temp = divMoves;
        const obj = {...temp[index], price: value || 0};
        temp[index] = obj;
        setDivMoves([...temp]);
    };

    const createDividendMoves = () => new Promise((resolve, reject) => {
        console.log('divMoves', divMoves)
        api.post('/dividend-move', divMoves)
            .then(() => resolve(true)).catch(() => reject(false));
    });

    const createNewBatchDividend = () => new Promise((resolve, reject) => {
        api.post('/batch-dividends', {id: route?.params?.batch?.id,name: newBatchDividend})
            .then((response) => resolve(response.data)).catch(() => reject(false));
    });

    const onSubmit = () => {
        if (newBatchDividend.trim() === '' || newBatchDividend === null || newBatchDividend === undefined) {
            console.error('[ERROR] - Nome do lote de investimento inválido!');
            return;
        }

        let hasErrors = false;
        divMoves.forEach(it => {
            if (it.stockId === null) {
                hasErrors = true;
                return console.error('[ERROR] - Stock ID inválido');
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

        createNewBatchDividend()
            .then((response: any) => {
                divMoves.map(it => it.batchDividendId = response.id);
                createDividendMoves().then(() => {
                    navigation.navigate("Dividends");
                }).catch(() => console.error('[POST] - Erro ao salvar movimentos de dividendo'));
            }).catch(() => console.error('[POST] - Não foi possível criar o lote.'));
    };

    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <TextInput style={BATCH_STYLES.textInput} defaultValue={newBatchDividend}
                   onChangeText={(value) => setNewBatchDividend(value)}
                   placeholder={"Nome do lote de dividendos"} placeholderTextColor={COLORS.placeholderText} />
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Moves List</Text>

                    <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue}]} onPress={() => newMove()}>
                        <Text style={BUTTON.whiteButtonText}>New Move</Text>
                    </TouchableOpacity>
                </View>
                <DataTable style={TABLE.table}>
                    <DataTable.Header>
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
                        {divMoves.map((it, index) => (
                            <TouchableOpacity key={index} onLongPress={() => {}}>
                                <DataTable.Row>
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
