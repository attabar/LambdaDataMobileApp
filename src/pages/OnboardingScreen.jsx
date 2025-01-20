import {Text, ImageBackground, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const image = require('../assets/hero.png');

// https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png

const screenHeight = Dimensions.get('window').height

const screenWidth = Dimensions.get('window').width


const OnboardingScreen = ({ navigation }) => {

    const navigateToSignupScreen = () => {
        navigation.navigate("SIGNUP")
    }

    const navigateToLoginScreen = () => {
        navigation.navigate("LOGIN")
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <ImageBackground 
                        source={image}
                        resizeMode='stretch' 
                        style={styles.image}
                    />
                </View>
                <View style={{marginTop: 250}}>
                    <Text style={styles.title}>
                        Easy Top-ups Ahead!
                    </Text>
                    <Text style={styles.subtitle}>
                        Add funds instantly and start exploring
                    </Text>
                    
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={styles.button} onPress={navigateToSignupScreen}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={navigateToLoginScreen}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        zIndex: 1
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight,
        width: screenWidth
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 5,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})