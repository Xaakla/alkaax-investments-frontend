import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Modal, Portal} from 'react-native-paper';

import {Context} from "../../context/context";

import api from '../../services/api';

export default function StockModal(props) {
    const {isStockModalVisible, setIsStockModalVisible, refreshStocksList, stockModel, setStockModel} = useContext(Context);

    const showStockModal = () => setIsStockModalVisible(true);
    const hideStockModal = () => {
        setIsStockModalVisible(false);
        setStockModel({id: null, code: ""});
    };

    useEffect(() => {
        console.log('props', props, stockModel);
    }, []);

    const createStock = () => {
        console.log('create')
        api.post('/stocks', {code: stockModel.code})
            .then((data) => {
                refreshStocksList();
                hideStockModal();
            }).catch(err => console.log('Não foi possível salvar ação', err));
    }

    const editStock = () => {
        api.patch('/stocks', stockModel)
            .then((data) => {
                refreshStocksList();
            }).catch(err => console.log('Não foi possível salvar ação', err));
        setStockModel({id: null, code: ""});
        hideStockModal();
    }

    const saveStock = () => props.isEdit ? editStock() : createStock();

    return (
        <Portal>
            <Modal visible={isStockModalVisible} onDismiss={hideStockModal} contentContainerStyle={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderTitle}>{props.isEdit ? 'Edit Stock' : 'New Stock'}</Text>
                    <TouchableOpacity onPress={() => hideStockModal()}>
                        <Icon name="md-close" style={[styles.modalHeaderIcon, styles.redColor]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.modalContent}>
                    <TextInput style={styles.modalInput} defaultValue={stockModel.code}
                               onChangeText={(value) => setStockModel({...stockModel, code: value})}
                               placeholderTextColor={"#9b9fa3"} placeholder={"Stock code"} maxLength={12} />
                </View>
                <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.modalPrimaryBtn} onPress={() => saveStock()}>
                        <Text style={styles.modalPrimaryBtnText}>Save</Text>
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
        width: '80%',
        alignSelf: 'center',
        borderRadius: 8
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalHeaderTitle: {
        color: '#deedf2',
        fontSize: 16,
        fontWeight: '600'
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
    }
});
