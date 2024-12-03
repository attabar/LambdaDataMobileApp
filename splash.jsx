import { Image, View, StyleSheet } from "react-native";
import Icon from './assets/icon.png';


export default function Splash() {
    return(
        <View style={styles.container}>
            <View>
                <Image 
                    source={Icon} 
                    style={styles.image}
                />
            </View>
             {/* <Text>Loading....</Text> */}
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
        width: 100, height: 100, resizeMode: "cover"

    }
})