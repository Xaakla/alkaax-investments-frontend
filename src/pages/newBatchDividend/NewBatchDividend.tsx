import {View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { DataTable } from 'react-native-paper';
import { BATCH_STYLES } from "../../global-styles/batch-styles";
import { TABLE } from "../../global-styles/table";
import { BUTTON } from "../../global-styles/button";
import { COLORS } from "../../global-styles/colors";

export default function NewBatchDividend() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"]

    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <TextInput style={BATCH_STYLES.textInput}
                   placeholder={"Nome do lote de dividendos"} placeholderTextColor={COLORS.placeholderText} />
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Stocks List</Text>

                    <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue}]}>
                        <Text style={BUTTON.whiteButtonText}>New Stock</Text>
                    </TouchableOpacity>
                </View>
                <DataTable style={TABLE.table}>
                    <DataTable.Header>
                        <DataTable.Title textStyle={[TABLE.tableText, TABLE.tableHeadText]}>Quotas</DataTable.Title>
                        <DataTable.Title textStyle={[TABLE.tableText, TABLE.tableHeadText]}>Name</DataTable.Title>
                        <DataTable.Title numeric textStyle={[TABLE.tableText, TABLE.tableHeadText]}>Price (Unity)</DataTable.Title>
                    </DataTable.Header>

                    <ScrollView style={TABLE.tableScrollView}>
                        <TouchableOpacity>
                            <DataTable.Row>
                                <DataTable.Cell textStyle={[TABLE.tableText, TABLE.tableBodyText]}>3</DataTable.Cell>
                                <DataTable.Cell textStyle={[TABLE.tableText, TABLE.tableBodyText]}>RECR11</DataTable.Cell>
                                <DataTable.Cell numeric textStyle={[TABLE.tableText, TABLE.tableBodyText]}>R$ 1,76</DataTable.Cell>
                            </DataTable.Row>
                        </TouchableOpacity>
                    </ScrollView>

                    <View style={[styles.row, TABLE.tableFooter]}>
                        <Text style={[TABLE.tableFooterInfoText]}>Total Quotas: 14</Text>
                        <Text style={[TABLE.tableFooterInfoText, {color: COLORS.green}]}>Total Price: R$ 14,74</Text>
                    </View>
                </DataTable>

                <View style={[styles.row, styles.btnView]}>
                    <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue}]}>
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
