import { Image, View, Text, StyleSheet } from "react-native";
import Icon from './assets/icon.png';


export default function Splash() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={{color: 'white', fontSize: 25, marginVertical: 10}}>Welcome To Yamboy Sub</Text>
            </View>
            <View>
                <Image 
                    source={Icon} 
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={{color: 'white'}}>Loading....</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'blue'
    },
    image: {
        width: 100, height: 100, resizeMode: "cover", borderRadius: 10
    }
})