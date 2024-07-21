import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {colors} from "../utility/colors"
import { TextInput } from "react-native-web";
import { fonts } from "../utility/fonts";
// import {fonts} from "../utility/fonts"

const SignupScreen = () => {
    const handleLogin = () => {
        // use fetch api here to send request to the API endpoint
    }
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Image source={require("../assets/logo.jpg")} style={styles.logo} />
                <Text>Registration Page</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.username}>First Name</Text>
                    <TextInput style={styles.input} name="username"/>
                    <Text style={styles.username}>Last Name</Text>
                    <TextInput style={styles.input} name="password"/>
                    <Text style={styles.username}>Username</Text>
                    <TextInput style={styles.input} name="username"/>
                    <Text style={styles.username}>Email</Text>
                    <TextInput style={styles.input} name="password"/>
                    <Text style={styles.username}>Password</Text>
                    <TextInput style={styles.input} name="username"/>
                    <Text style={styles.username}>Confirm Password</Text>
                    <TextInput style={styles.input} name="password"/>

                    <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        position: "absolute",
        top: "15%",
        alignItems: "center",
        backgroundColor: colors.white,
        width: "70%",
        height: "88vh",
    },
    logo: {
        width: 50,
        height: 50
    },
    username: {
        position: "relative",
        right: 5
    },
    input: {
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        borderRadius: 10
    },
    inputContainer: {
        marginTop: 20
    },
    loginContainer: {
        backgroundColor: colors.primary,
        width: "100%",
        height: 50,
        borderRadius: 100,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: colors.white,
        fontFamily: fonts.Bold
    }
});