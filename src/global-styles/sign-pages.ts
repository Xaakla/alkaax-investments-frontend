import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const SIGN = StyleSheet.create({
    contentView: {
        width: '80%'
    },
    title: {
        color: COLORS.whiteText,
        fontWeight: '700',
        fontSize: 32
    },
    subtitle: {
        marginVertical: 8,
        color: COLORS.whiteText,
        fontSize: 14
    },
    input: {
        backgroundColor: COLORS.primaryInputBackground,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 5,
        color: COLORS.whiteText,
        marginVertical: 10
    },
    footerText: {
        color: COLORS.whiteText,
        marginTop: 12,
        fontSize: 12,
        textAlign: "center"
    }
});
