import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const INFO_BOX = StyleSheet.create({
    infoBoxHeaderView: {
        backgroundColor: COLORS.secondaryDarkBackground,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    infoBoxView: {
        borderColor: COLORS.blue,
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingHorizontal: 6
    },
    infoBoxFooter: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    infoBoxLabelText: {
        color: COLORS.blueText,
        fontSize: 12,
        marginBottom: 2
    },
    infoBoxText: {
        color: COLORS.whiteText,
        fontSize: 24,
        fontWeight: '700'
    },
    infoBoxTextInput: {
        color: COLORS.whiteText,
        fontSize: 24,
        fontWeight: '700',

    },
    infoBoxFooterText: {
        color: COLORS.whiteText,
        fontSize: 16,
        fontWeight: '500'
    },
    infoBoxFooterInfoText: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: "center"
    }
});
