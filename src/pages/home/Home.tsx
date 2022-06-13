import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import { INFO_BOX } from "../../global-styles/info-box";
import { COLORS } from "../../global-styles/colors";

export default function Home({navigation}) {
    return (
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
                        <Text style={INFO_BOX.infoBoxLabelText}>Renda Variável:</Text>
                        <Text style={INFO_BOX.infoBoxFooterText}>R$ 10.999,50</Text>
                        <Text style={[INFO_BOX.infoBoxFooterInfoText, {color: COLORS.green}]}>+R$ 1.354,78</Text>
                    </View>
                    <View>
                        <Text style={INFO_BOX.infoBoxLabelText}>Renda Fixa:</Text>
                        <Text style={INFO_BOX.infoBoxFooterText}>R$ 2.600,00</Text>
                        <Text style={[INFO_BOX.infoBoxFooterInfoText, {color: COLORS.red}]}>-R$ 250,03</Text>
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
        backgroundColor: COLORS.primaryDarkBackground,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
    mainContentContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        backgroundColor: COLORS.primaryInputBackground,
        paddingHorizontal: 14,
        paddingVertical: 18,
        borderRadius: 8,
        marginTop: 24,
    },
    cardContainer: {
        borderColor: COLORS.blueText,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    cardText: {
        color: COLORS.whiteText,
        fontSize: 16,
        fontWeight: "600"
    }
});
