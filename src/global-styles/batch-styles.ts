import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const BATCH_STYLES = StyleSheet.create({
    textInput: {
        flex: 1,
        backgroundColor: COLORS.primaryInputBackground,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 5,
        color: COLORS.whiteText
    }
});
