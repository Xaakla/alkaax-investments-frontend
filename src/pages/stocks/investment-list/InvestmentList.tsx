import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from "react-native";

export default function InvestmentList() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.historicCardContainer}>
                <View style={styles.historicCardHeader}>
                    <Text style={styles.historicTitleText}>Maio/22</Text>
                    <Text style={styles.historicPriceText}>R$ 13.599,50</Text>
                </View>
                <View style={styles.historicCardBody}>
                    <TouchableOpacity style={styles.historicCardItem}>
                        <Text style={styles.historicCardItemName}>2 - RECR11</Text>
                        <Text style={styles.historicCardItemUntPrice}>R$ 45,00</Text>
                        <Text style={styles.historicCardItemTotalPrice}>R$ 90,00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.historicCardItem}>
                        <Text style={styles.historicCardItemName}>3 - KNSC11</Text>
                        <Text style={styles.historicCardItemUntPrice}>R$ 30,00</Text>
                        <Text style={styles.historicCardItemTotalPrice}>R$ 90,00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.historicCardItem}>
                        <Text style={styles.historicCardItemName}>4 - UIJP11</Text>
                        <Text style={styles.historicCardItemUntPrice}>R$ 75,00</Text>
                        <Text style={styles.historicCardItemTotalPrice}>R$ 300,00</Text>
                    </TouchableOpacity>
                    <View style={styles.historicCardFooter}>
                        <Text style={[styles.historicCardFooterText, styles.greenColor]}>Compradas: 9</Text>
                        <Text style={[styles.historicCardFooterText, styles.redColor]}>Vendidas: 0</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04101e',
        paddingVertical: 12
    },
    historicCardContainer: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    historicCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: '#033457',
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingHorizontal: 6
    },
    historicTitleText: {
        color: '#deedf2',
        fontSize: 18,
        fontWeight: "700"
    },
    historicPriceText: {
        color: '#00f400',
        fontSize: 16,
        fontWeight: "600"
    },
    historicCardBody: {
        paddingTop: 12,
        paddingBottom: 4,
        paddingHorizontal: 6
    },
    historicCardItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 12
    },
    historicCardItemName: {
        color: '#deedf2',
    },
    historicCardItemUntPrice: {
        color: '#e49701',
    },
    historicCardItemTotalPrice: {
        color: '#00f400'
    },
    historicCardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        padding: 12,
        paddingBottom: 0,
        borderColor: '#033457',
        borderStyle: "solid",
        borderTopWidth: 1,
    },
    historicCardFooterText: {
        fontSize: 15,
        fontWeight: "700"
    },
    greenColor: { color: '#00f400' },
    redColor: { color: '#e80000' },
});
