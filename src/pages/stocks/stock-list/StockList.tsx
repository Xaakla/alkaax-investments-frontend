import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function StockList() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.stockCardContainer}>
                <Text style={styles.stockCardName}>RECR11</Text>
                <Text style={styles.stockCardQuotas}>cotas: 11</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04101e',
        paddingVertical: 24
    },
    stockCardContainer: {
        backgroundColor: '#041b2d',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8
    },
    stockCardName: {
        color: '#deedf2',
        fontSize: 18,
        fontWeight: '600'
    },
    stockCardQuotas: {
        color: '#deedf2',
        fontSize: 16
    }
});
