import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, ScrollView, Alert, Button } from "react-native";
import { colors } from "../utility/colors";
import { fonts } from "../utility/fonts";
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [referral, setReferral] = useState('');
    const [pin, setPin] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        navigation.navigate("LOGIN")
    }

    const handleSignup = () => {

        const formData = new URLSearchParams();
         formData.append("fullname", fullname);
         formData.append("email", email);
         formData.append("phone", phone);
         formData.append("referral", referral);
         formData.append("pin", pin);
         formData.append("password", password);

        fetch('http://localhost:8081/php/Registration.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        })
        .then(async (response) => {
            try {
                const data = await response.json(); // Attempt to parse JSON
                if(data.success){
                    Alert.alert("Success", data.message);
                } else {
                    Alert.alert("Error", data.message);
                }
            } catch (error) {
                // If JSON parsing fails, handle the error
                console.error("Parsing error:", error);
                Alert.alert("Error", "Invalid response from server.");
            }
        })
        .catch(error => {
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
                    <TextInput 
                        style={styles.input} 
                        placeholder='Muhammad Abdulmalik' 
                        value={fullname} 
                        onChangeText={setFullName} 
                    />

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Mabdulmalik353@gmail.com' 
                        value={email} 
                        onChangeText={setEmail} 
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='+2348149715017' 
                        value={phone} 
                        onChangeText={setPhone} 
                        minLength={11} 
                        keyboardType="numeric" 
                    />

                    <Text style={styles.label}>Referral</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Referal Code (Optionl)' 
                        value={referral} 
                        onChangeText={setReferral} 
                    />

                    <Text style={styles.label}>Create Pin</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Transaction Pin' 
                        value={pin} onChangeText={setPin} 
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Password' 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry 
                    />

                    <TouchableOpacity style={styles.loginContainer} onPress={handleSignup}>
                        <Button style={styles.signupText} title='Sign Up' />
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
