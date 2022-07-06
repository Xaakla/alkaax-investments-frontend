import { COLORS } from "./colors";
import {StyleSheet} from "react-native";

export const MODAL = StyleSheet.create({
    greenColor: {color: '#00f400'},
    redColor: {color: '#e80000'},
    modalContainer: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 24,
        paddingVertical: 16,
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 150,
        borderRadius: 8,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    modalHeaderTitle: {
        color: '#deedf2',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    modalHeaderIcon: {
        color: '#deedf2',
        fontSize: 18
    },
    modalContent: {
        marginTop: 12,
        marginBottom: 8
    },
    modalInput: {
        backgroundColor: '#052844',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 5,
        color: '#deedf2'
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalPrimaryBtn: {
        marginTop: 12,
        alignSelf: 'flex-end',
        borderRadius: 8,
        backgroundColor: 'green',
        paddingHorizontal: 12,
        paddingVertical: 6,
        minWidth: 68,
    },
    modalPrimaryBtnText: {
        color: '#deedf2',
        fontWeight: '600',
        textAlign: 'center'
    },
    modalSecondaryBtn: {
        marginTop: 12,
        alignSelf: 'flex-end',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 12,
        paddingVertical: 6,
        minWidth: 68,
    },
    modalSecondaryBtnText: {
        color: '#deedf2',
        fontWeight: '600',
        textAlign: 'center'
    }
});
