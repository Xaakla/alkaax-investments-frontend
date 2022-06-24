import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const TABLE = StyleSheet.create({
    table: {
        backgroundColor: COLORS.secondaryDarkBackground,
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
        borderColor: COLORS.blue,
        borderStyle: "solid",
        borderTopWidth: 1,
        paddingBottom: 4,
        paddingHorizontal: 6
    },
    tableText: {
        color: COLORS.whiteText
    },
    tableHeadCell: {
        flex: 1
    },
    tableBodyCell: {
        flex: 1
    },
    tableHeadText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.whiteText
    },
    tableBodyText: {
    },
    tableFooterInfoText: {
        color: COLORS.whiteText,
        fontSize: 12,
        fontWeight: '400',
        textAlign: "center"
    }
});
