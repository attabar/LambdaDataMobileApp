import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from "../utility/colors"; // Adjust import based on your project structure
import { fonts } from "../utility/fonts"; // Adjust import based on your project structure

const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle the login logic here
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Mock login action
    Alert.alert('Login Successful', `Welcome ${username}`);
    // Here you can add the actual login logic such as an API call
  };

  const handleDashboard = () => {
    navigation.navigate("DASHBOARD")
}

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.brand}>
          <Image source={require("../assets/yamboyLogo.jpg")} style={styles.logo} />
          <Text style={styles.title}>Sign in to your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input} 
            value={username} 
            onChangeText={setUsername} 
            placeholder="Username"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={setPassword} 
            placeholder="Password"
            secureTextEntry 
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleDashboard}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? 
          <Text style={styles.signupLink} onPress={() => navigation.navigate('SIGNUP')}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: colors.white,
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  brand: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 15,
    // fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
  },
  signupLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
