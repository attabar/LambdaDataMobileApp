import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {colors} from "../utility/colors"
import { useNavigation } from "@react-navigation/native";


const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("LOGIN")
    }

    const handleSignup = () => {
        navigation.navigate("SIGNUP")
    }

    return(
        <View style={styles.container}>
            <Image source={require("../assets/yamboyLogo.jpg")} style={styles.logo}/>
            <Image source={require("../assets/hero.png")} style={styles.bannerImage}/>
            <Text style={styles.title}>YAMBOY DATA SUB</Text>
            <Text style={styles.subtitle}>Unlock the seemlessly data, airtime, tv subscription, nepa bill on an affordable price.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: 'lightblue' }]}
                        onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginButtonWrapper}
                    onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: 50,
        width: 50,
        marginVertical: 20,
        borderRadius: 50
    },
    bannerImage: {
        height: 190,
        width: 200,
        position: 'relative',
        right: 24
    },
    title: {
        fontSize: 30,
         textAlign: "center",
         paddingHorizontal: 20,
         color: 'white',
         marginTop: 20
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        color: 'white',
        paddingHorizontal: 20,
        marginVertical: 20
    },
    buttonContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'lightblue',
        width: "80%",
        height: 35,
        borderRadius: 100
    },
    loginButtonWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        borderRadius: 100,
    },
    loginButtonText: {
        color: colors.primary, 
        fontSize: 18
    },
    signupButtonText: {
        fontSize: 18,
        color: 'white'
    }
});