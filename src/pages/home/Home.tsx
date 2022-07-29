import { useEffect, useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import { INFO_BOX } from "../../global-styles/info-box";
import { COLORS } from "../../global-styles/colors";
import api from "../../services/api";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}) {
    
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [totalDividend, setTotalDividend] = useState(0);
    
    useEffect(() => {
        api.get('/balance-info/variable-income-investment')
            .then((response) => {
                setTotalInvestment(response.data);
            }).catch(err => console.error('Erro no request', err));

        api.get('/balance-info/variable-income-dividend')
            .then((response) => {
                setTotalDividend(response.data);
            }).catch(err => console.error('Erro no request', err));
    }, []);
    
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
                        <Text style={INFO_BOX.infoBoxFooterText}>R$ {totalInvestment.toFixed(2)}</Text>
                        <Text style={[INFO_BOX.infoBoxFooterInfoText, {color: COLORS.green}]}>+R$ {totalDividend.toFixed(2)}</Text>
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
                    <Icon name="ios-stats-chart-outline" size={24} style={{marginBottom: 10, color: '#fff'}} />
                    <Text style={styles.cardText}>Ações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardContainer}>
                    <Icon2 name="credit-card" size={24} style={{marginBottom: 10, color: '#fff'}} />
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
        display: 'flex',
        alignItems: 'center',
        minWidth: 100
    },
    cardText: {
        color: COLORS.whiteText,
        fontSize: 16,
        fontWeight: "600"
    }
});
