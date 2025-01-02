import { StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import  {colors} from "../utility/colors"; // Adjust import based on your project structure
// import {Icon} from 'react-native-vector-icons/MaterialIcons';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {

  const navigation = useNavigation();

  const navigateToSignUpScreen = () => {
    navigation.navigate("SIGNUP")
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: colors.dark}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flexDirection: "row", marginTop: 40}}>
          <Text style={{fontWeight: "bold", fontSize: 22, color: colors.dark}}>Yamboy</Text>
          <Text style={{fontWeight: "bold", fontSize: 22, color: colors.secondary}}>Sub</Text>
        </View>

        <View style={{marginTop: 60}}>
          <Text style={{fontSize: 27, fontWeight: "bold", color: colors.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: "bold", color: colors.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <Icon 
              name="mail-outline" 
              size={20} 
              color={colors.light} 
              style={styles.inputIcon}
            />
            <TextInput placeholder='Email' style={styles.input}/>
          </View>
        </View>

        <View style={{marginTop: 20}}>
        <View style={styles.inputContainer}>
          <Icon 
            name="lock-outline" 
            size={20} 
            color={colors.light} 
            style={styles.inputIcon}
          />
          <TextInput placeholder='Password' style={styles.input} secureTextEntry/>
        </View>
        </View>

        <View style={styles.btnPrimary}>
          <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>Sign In</Text>  
        </View>  

        <TouchableOpacity onPress={navigateToSignUpScreen} style={{marginTop: 10, alignItems: 'center'}}>
          <Text>Don't have account ? Create Now</Text>
        </TouchableOpacity>        
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  inputIcon: {
    marginTop: 5,
    position: "absolute",
  }, 
  input: {
    color: colors.light,
    paddingLeft: 50,
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 15
  },
  btnPrimary: {
    backgroundColor: colors.primary, 
    height: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
