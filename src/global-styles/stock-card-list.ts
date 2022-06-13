import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const STOCK_CARD_LIST = StyleSheet.create({
    stockCardListContainer: {
        backgroundColor: '#041b2d',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 8,
        borderRadius: 8
    },
    stockCardListName: {
        color: '#deedf2',
        fontSize: 18,
        fontWeight: '600'
    },
    stockCardListQuotas: {
        color: '#deedf2',
        fontSize: 16
    }
});
