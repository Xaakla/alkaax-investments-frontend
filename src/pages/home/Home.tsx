import {StyleSheet, TouchableOpacity, Text, View} from "react-native";

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.balanceHeaderView}>
                <View style={styles.balanceView}>
                    <Text style={styles.balanceLabelText}>Saldo total:</Text>
                    <Text style={styles.balanceText}>
                        R$ 13.599,50
                        <Text style={[styles.balanceFooterInfoText, styles.greenColor]}> +R$ 1.104,75</Text>
                    </Text>
                </View>
                <View style={styles.balanceFooter}>
                    <View>
                        <Text style={styles.balanceLabelText}>Renda Variável:</Text>
                        <Text style={styles.balanceFooterText}>R$ 10.999,50</Text>
                        <Text style={[styles.balanceFooterInfoText, styles.greenColor]}>+R$ 1.354,78</Text>
                    </View>
                    <View>
                        <Text style={styles.balanceLabelText}>Renda Fixa:</Text>
                        <Text style={styles.balanceFooterText}>R$ 2.600,00</Text>
                        <Text style={[styles.balanceFooterInfoText, styles.redColor]}>-R$ 250,03</Text>
                    </View>
                </View>
            </View>

            <View style={styles.mainContentContainer}>
                <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("Stocks")}>
                    <Text style={styles.cardText}>Ações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardContainer}>
                    <Text style={styles.cardText}>Cartão</Text>
                </TouchableOpacity>
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
    text: {
        color: '#deedf2'
    },
    balanceHeaderView: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8
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
    greenColor: { color: '#00f400' },
    redColor: { color: '#e80000' },
    mainContentContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        backgroundColor: '#041b2d',
        paddingHorizontal: 14,
        paddingVertical: 18,
        borderRadius: 8,
        marginTop: 24,
    },
    cardContainer: {
        borderColor: '#1d5d94',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    cardText: {
        color: '#deedf2',
        fontSize: 16,
        fontWeight: "600"
    }
});
