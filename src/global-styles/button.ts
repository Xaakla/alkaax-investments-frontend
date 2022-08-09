import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const BUTTON = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 22,
        paddingVertical: 12
    },
    whiteButtonText: {
        color: COLORS.whiteText,
        fontWeight: "600",
        textAlign: "center",
    },
});
