import { StyleSheet, View, Image } from "react-native";
import {colors} from "../utility/colors"

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Image source={require("../assets/logo.jpg")} />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
});