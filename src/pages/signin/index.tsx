import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from "../../global-styles/colors";
import {SIGN} from "../../global-styles/sign-pages";
import {BUTTON} from "../../global-styles/button";
import api from "../../services/api";

export default function Signin({navigation}) {

    // {
    //     firstname: 'test',
    //         lastname: 'lastname',
    //     username: 'xaaklaa',
    //     email: 'diego@gmail.com',
    //     password: 'password',
    //     matchPassword: 'password'
    // }

    const [email, setEmail] = useState("diego@gmail.com");
    const [password, setPassword] = useState("password");

    const signin = () => {
        if (email !== "" || password !== "") {
            api.post("/auth/signin", {email, password})
                .then((data) => {
                    navigation.navigate("Home");
                }).catch(err => console.error("erro ao logar - ", err));
        }
    }

    return (
        <View style={styles.container}>
            <View style={SIGN.contentView}>
                <Text style={SIGN.title}>Login</Text>
                <Text style={SIGN.subtitle}>Entre com suas credenciais para continuar...</Text>

                <TextInput style={SIGN.input}
                           placeholder="Email" onChangeText={text => setEmail(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />
                <TextInput style={SIGN.input}
                           placeholder="Senha" onChangeText={text => setPassword(text)}
                           placeholderTextColor={COLORS.placeholderText}
                />

                <TouchableOpacity style={[BUTTON.button, {backgroundColor: COLORS.blue, marginTop: 10}]}
                    onPress={signin}>
                    <Text style={BUTTON.whiteButtonText}>Entrar</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={SIGN.footerText} onPress={() =>  navigation.navigate("Signup")}>CRIAR UMA NOVA CONTA</Text>
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
