import {View, Text, StyleSheet, TouchableOpacity, Button, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { DataTable } from 'react-native-paper';


export default function NewBatchDividend() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"]

    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <SelectDropdown
                    data={countries}
                    statusBarTranslucent={true}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
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
                    defaultButtonText={"Select an batch"}
                    buttonStyle={styles.selectBtn}
                    buttonTextStyle={styles.selectBtnText}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>New Batch</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Stocks List</Text>

                    <TouchableOpacity style={[styles.btn]}>
                        <Text style={styles.btnText}>New Stock</Text>
                    </TouchableOpacity>
                </View>
                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title textStyle={[styles.tableText, styles.tableHeadText]}>Quotas</DataTable.Title>
                        <DataTable.Title textStyle={[styles.tableText, styles.tableHeadText]}>Name</DataTable.Title>
                        <DataTable.Title numeric textStyle={[styles.tableText, styles.tableHeadText]}>Price (Unity)</DataTable.Title>
                    </DataTable.Header>

                    <ScrollView style={styles.tableScrollView}>
                        <TouchableOpacity>
                            <DataTable.Row>
                                <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                                <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                                <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                            </DataTable.Row>
                        </TouchableOpacity>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>OUJP11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>3</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>RECR11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,76</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>1</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>KSCI11</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,05</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>2</DataTable.Cell>
                            <DataTable.Cell textStyle={[styles.tableText, styles.tableBodyText]}>kkkkkkkkkkkkkkkkkkkkk</DataTable.Cell>
                            <DataTable.Cell numeric textStyle={[styles.tableText, styles.tableBodyText]}>R$ 1,20</DataTable.Cell>
                        </DataTable.Row>
                    </ScrollView>

                    <View style={[styles.row, styles.tableFooter]}>
                        <Text style={[styles.tableFooterInfoText]}>Total Quotas: 14</Text>
                        <Text style={[styles.tableFooterInfoText, styles.greenColor]}>Total Price: R$ 14,74</Text>
                    </View>
                </DataTable>

                <View style={[styles.row, styles.btnView]}>
                    <TouchableOpacity style={[styles.btn]}>
                        <Text style={styles.btnText}>Save Batch</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    selectBtn: {
        backgroundColor: 'transparent',
        borderColor: '#033457',
        borderStyle: "solid",
        borderWidth: 1,
        height: 42,
        width: 150,
        borderRadius: 8
    },
    selectBtnText: {
        color: '#deedf2',
        fontSize: 14,
        fontWeight: '700'
    },
    btn: {
        backgroundColor: '#033457',
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 22,
        padding: 12
    },
    btnText: {
        color: '#deedf2',
        fontWeight: "600"
    },
    labelText: {
        color: '#1d5d94',
        fontSize: 16,
        marginBottom: 2,
    },
    tableContainer: {
        marginTop: 32,
    },
    table: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 8
    },
    tableScrollView: {
        height: 420
    },
    tableFooter: {
        paddingTop: 12,
        borderColor: '#033457',
        borderStyle: "solid",
        borderTopWidth: 1,
        paddingBottom: 4,
        paddingHorizontal: 6
    },
    tableText: {
        color: '#deedf2'
    },
    tableHeadText: {
        fontSize: 16,
        fontWeight: '600',
    },
    tableBodyText: {
    },
    tableFooterInfoText: {
        color: '#deedf2',
        fontSize: 12,
        fontWeight: '400',
        textAlign: "center"
    },
    greenColor: { color: '#00f400' },
    redColor: { color: '#e80000' },
    btnView: {
        justifyContent: 'flex-end',
        paddingTop: 24
    }
});
