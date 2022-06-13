import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const HISTORIC_CARD = StyleSheet.create({
    historicCard: {
        backgroundColor: COLORS.secondaryDarkBackground,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    historicCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: COLORS.blue,
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingHorizontal: 6
    },
    historicTitleText: {
        color: COLORS.whiteText,
        fontSize: 18,
        fontWeight: "700"
    },
    historicPriceText: {
        color: COLORS.green,
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
        color: COLORS.whiteText,
    },
    historicCardItemUntPrice: {
        color: COLORS.orange,
    },
    historicCardItemTotalPrice: {
        color: COLORS.green
    },
    historicCardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        padding: 12,
        paddingBottom: 0,
        borderColor: COLORS.blue,
        borderStyle: "solid",
        borderTopWidth: 1,
    },
    historicCardFooterText: {
        fontSize: 15,
        fontWeight: "700"
    },
});
