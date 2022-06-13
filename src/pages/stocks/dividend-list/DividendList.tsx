import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS } from "../../../global-styles/colors";
import { HISTORIC_CARD } from "../../../global-styles/historic-card";

export default function DividendList() {
    return (
        <ScrollView style={styles.container}>
            <View style={HISTORIC_CARD.historicCard}>
                <View style={HISTORIC_CARD.historicCardHeader}>
                    <Text style={HISTORIC_CARD.historicTitleText}>Maio/22</Text>
                    <Text style={HISTORIC_CARD.historicPriceText}>R$ 13,50</Text>
                </View>
                <View style={HISTORIC_CARD.historicCardBody}>
                    <TouchableOpacity style={HISTORIC_CARD.historicCardItem}>
                        <Text style={HISTORIC_CARD.historicCardItemName}>2 - RECR11</Text>
                        <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ 2,00</Text>
                        <Text style={HISTORIC_CARD.historicCardItemTotalPrice}>R$ 4,00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HISTORIC_CARD.historicCardItem}>
                        <Text style={HISTORIC_CARD.historicCardItemName}>3 - KNSC11</Text>
                        <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ 1,50</Text>
                        <Text style={HISTORIC_CARD.historicCardItemTotalPrice}>R$ 4,50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HISTORIC_CARD.historicCardItem}>
                        <Text style={HISTORIC_CARD.historicCardItemName}>4 - UIJP11</Text>
                        <Text style={HISTORIC_CARD.historicCardItemUntPrice}>R$ 1,25</Text>
                        <Text style={HISTORIC_CARD.historicCardItemTotalPrice}>R$ 5,00</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkBackground,
        paddingVertical: 12
    }
});
