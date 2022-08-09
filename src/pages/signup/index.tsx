import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from "../../global-styles/colors";
import {SIGN} from "../../global-styles/sign-pages";
import {BUTTON} from "../../global-styles/button";
import api from "../../services/api";

export default function Signup({navigation}) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");

    const signup = () => {
        if (firstname !== "" || lastname !== "" || username !== "" || email !== "" || password !== "" || matchPassword !== "") {
            api.post("/auth/signup", {firstname, lastname, username, email, password, matchPassword})
                .then(() => {
                    navigation.navigate("Signin")
                })
                .catch(err => console.error("erro ao criar uma nova conta - ", err));
        }
    }

    return (
        <View style={styles.container}>
            <View style={SIGN.contentView}>
                <Text style={SIGN.title}>Cadastrar</Text>
                <Text style={SIGN.subtitle}>Entre com suas credenciais para continuar...</Text>

                <TextInput style={SIGN.input}
                           placeholder="Nome" onChangeText={text => setEmail(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Sobrenome" onChangeText={text => setEmail(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Username" onChangeText={text => setEmail(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Email" onChangeText={text => setEmail(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Senha" onChangeText={text => setPassword(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Confirmar senha" onChangeText={text => setPassword(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />

                <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue, marginTop: 10}]}
                                  onPress={signup}>
                    <Text style={BUTTON.whiteButtonText}>Criar conta</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={SIGN.footerText} onPress={() => navigation.navigate("Signin")}>JÁ TENHO UMA CONTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryDarkBackground,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
});
