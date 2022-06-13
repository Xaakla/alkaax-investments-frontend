import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Modal, Portal} from 'react-native-paper';

import {Context} from "../../context/context";

import api from '../../services/api';

export default function DeleteModal() {
    const {isDeleteModalVisible, setIsDeleteModalVisible, setTitleDeleteModal,
        titleDeleteModal, stockModel, refreshStocksList} = useContext(Context);

    const hideDeleteModal = () => {
        setIsDeleteModalVisible(false);
        setTitleDeleteModal("");
    };

    const confirmDeleteModal = () => {
        api.delete(`/stocks/${stockModel.id}`)
            .then((response) => {
                refreshStocksList();
                setIsDeleteModalVisible(false);
            })
            .catch(error => console.error("[STOCKS] - " + error));
    }


    return (
        <Portal>
            <Modal visible={isDeleteModalVisible} onDismiss={hideDeleteModal} contentContainerStyle={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderTitle}>{titleDeleteModal}</Text>
                </View>
                <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.modalSecondaryBtn} onPress={() => hideDeleteModal()}>
                        <Text style={styles.modalSecondaryBtnText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalPrimaryBtn} onPress={() => confirmDeleteModal()}>
                        <Text style={styles.modalPrimaryBtnText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    greenColor: {color: '#00f400'},
    redColor: {color: '#e80000'},
    modalContainer: {
        backgroundColor: '#041b2d',
        paddingHorizontal: 24,
        paddingVertical: 16,
        width: '60%',
        alignSelf: 'center',
        borderRadius: 8
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
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
