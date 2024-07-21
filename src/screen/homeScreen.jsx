import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {colors} from "../utility/colors"
import {fonts} from "../utility/fonts"
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("LOGIN")
    }

    const handleSignup = () => {
        navigation.navigate("SIGNUP")
    }
    return(
        <View style={styles.container}>
            <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
            <Image source={require("../assets/hero.png")} style={styles.bannerImage}/>
            <Text style={styles.text}>Lambda Data</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis voluptatem eum beatae a nemo quis voluptatum a.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: colors.primary }]}
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

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white,
        alignItems: "center",
    },
    logo: {
        height: 110,
        width: 110,
        marginVertical: 30
    },
    bannerImage: {
        height: 200,
        width: 200
    },
    text: {
        fontSize: 40,
         fontFamily: fonts.SemiBold,
         textAlign: "center",
         paddingHorizontal: 20,
         color: colors.primary,
         marginTop: 40
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        color: colors.secondary,
        paddingHorizontal: 20,
        marginVertical: 20
    },
    buttonContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.primary,
        width: "80%",
        height: 35,
        borderRadius: 100
    },
    loginButtonWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        borderRadius: 100
    },
    loginButtonText: {
        color: colors.white, 
        fontSize: 18
    },
    signupButtonText: {
        fontFamily: fonts.SemiBold,
        fontSize: 18
    }
});