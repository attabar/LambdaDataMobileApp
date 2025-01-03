import { StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'
import  {colors} from "../utility/colors"; // Adjust import based on your project structure
import Icon  from 'react-native-vector-icons/MaterialIcons';



const SignupScreen = () => {

    const navigation = useNavigation();

    const navigateToLoginScreen = () => {
        navigation.navigate("LOGIN")
    }
    return (
        <SafeAreaView style={{paddingHorizontal: 20, backgroundColor: colors.dark}}>
          <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={{flexDirection: "row", marginTop: 40}}>
              <Text style={{fontWeight: "bold", fontSize: 22, color: colors.dark}}>YAMBOY</Text>
              <Text style={{fontWeight: "bold", fontSize: 22, color: colors.secondary}}>SUB</Text>
            </View>
    
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 27, fontWeight: "bold", color: colors.dark}}>
                Welcome Back,
              </Text>
              <Text style={{fontSize: 19, fontWeight: "bold", color: colors.light}}>
                Sign Up to continue
              </Text>
            </View>

            <View style={{marginTop: 10}}>
              <View style={styles.inputContainer}>
                <Icon 
                  name="person-outline" 
                  size={20} 
                  color={colors.light} 
                  style={styles.inputIcon}
                />
                <TextInput placeholder='Full Name' style={styles.input}/>
              </View>
            </View>
    
            <View style={{marginTop: 10}}>
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

            <View style={{marginTop: 10}}>
              <View style={styles.inputContainer}>
                <Icon 
                  name="phone-in-talk" 
                  size={20} 
                  color={colors.light} 
                  style={styles.inputIcon}
                />
                <TextInput placeholder='Phone' style={styles.input}/>
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View style={styles.inputContainer}>
                <Icon 
                  name="link" 
                  size={20} 
                  color={colors.light} 
                  style={styles.inputIcon}
                />
                <TextInput placeholder='Referral Code' style={styles.input}/>
              </View>
            </View>

            <View style={{marginTop: 10}}>
            <View style={styles.inputContainer}>
              <Icon 
                name="key" 
                size={20} 
                color={colors.light} 
                style={styles.inputIcon}
              />
              <TextInput placeholder='Create Pin' style={styles.input} secureTextEntry/>
            </View>
            </View>
    
            <View style={{marginTop: 10}}>
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
    
            <TouchableOpacity style={styles.btnPrimary}>
              <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>Sign Up</Text>  
            </TouchableOpacity>  
    
            <View>
          <View 
            style={{
              marginVertical: 20, 
              flexDirection: "row", 
              justifyContent: "center", 
              alignItems: "center"
              }}>
              <View style={styles.line}></View>
              <Text style={{fontWeight: "bold", marginHorizontal: 5}}>OR</Text>
              <View style={styles.line}></View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={styles.btnSecondary}>
              <Text style={{fontWeight: "bold", fontSize: 16}}>Sign up with </Text>
              <Image style={styles.btnImage} source={require("../assets/facebook.png")}/>
            </View>
            <View style={{width: 10}}/>
            <View style={styles.btnSecondary}>
              <Text>Sign up with </Text>
              <Image style={styles.btnImage} source={require("../assets/google.jpeg")}/>
            </View>
          </View>

          <View style={{
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "center",
            marginTop: 40, 
            marginBottom: 20}}>
              <Text style={{color: colors.light, fontWeight: "bold"}}>Already have an account?</Text>
              <TouchableOpacity onPress={navigateToLoginScreen}>
                <Text style={{color: colors.pink, fontWeight: "bold"}}> Sign In</Text>
              </TouchableOpacity> 
          </View>
          </View>           
              
          </ScrollView>
        </SafeAreaView>
      );
};

export default SignupScreen;

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
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    line: {
      height: 1,
      width: 30,
      backgroundColor: colors.light
    },
    btnSecondary: {
      height: 50,
      borderWidth: 1,
      borderColor: colors.light,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      flexDirection: "row"
    },
    btnImage: {
      width: 20,
      height: 20,
      marginLeft: 5
    }
  });
  