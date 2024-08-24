import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import { colors } from "../utility/colors";
import { fonts } from "../utility/fonts";
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate("LOGIN")
    }

    const handleSignup = () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        const userData = {
            firstName,
            lastName,
            username,
            email,
            phone,
            password,
            confirmPassword
        };

        fetch('https://mikiyatech.com.ng/mikiyatech.com.ng/Registration.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful signup
            console.log(data);
            if(data.success){
                Alert.alert("Success", data.message);
            } else {
                Alert.alert("Error: ", data.message)
            }
        })
        .catch(error => {
            // Handle signup error
            console.error(error);
            Alert.alert("Error", "Something went wrong. Please try again later.");
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Image source={require("../assets/yamboyLogo.jpg")} style={styles.logo} />
                <Text style={{marginTop: 15}}>Register To Continue Enjoying!</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} placeholder='Full Name' value={firstName} onChangeText={setFirstName} />
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} placeholder='Email Address' value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={setUsername} />
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput style={styles.input} placeholder='Phone Number' value={phone} onChange={setPhone} minLength={11}/>
                    <Text style={styles.label}>Create Pin</Text>
                    <TextInput style={styles.input} placeholder='Transaction Pin' value={lastName} onChangeText={setLastName} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
                    <Text style={styles.label}>Referral</Text>
                    <TextInput style={styles.input} placeholder='Referral Code (Optional)' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                    <TouchableOpacity style={styles.loginContainer} onPress={handleSignup}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.accountExist}>Already have an account? </Text><TouchableOpacity onPress={handleLogin}><Text style={{textAlign: 'center'}}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
    },
    formContainer: {
        alignItems: "center",
        backgroundColor: colors.white,
        width: "90%",
        padding: 20,
        borderRadius: 10
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    label: {
        position: "relative",
        right: 5,
        marginVertical: 5,
    },
    input: {
        borderWidth: 2,
        borderColor: "blue",
        padding: 10,
        borderRadius: 10,
        width: 260,
        marginVertical: 5,
    },
    inputContainer: {
        marginTop: 20
    },
    loginContainer: {
        backgroundColor: 'blue',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        // width: "100%"
    },
    signupText: {
        color: '#fff',
        fontFamily: fonts.Bold
    },
    accountExist: {
        marginVertical: 5,
        textAlign: 'center'
    }
});
