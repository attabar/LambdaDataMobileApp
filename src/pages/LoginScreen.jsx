import { StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import  {colors} from "../utility/colors";``
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const LoginScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  // const navigateToSignUpScreen = () => {
  //   navigation.navigate("SIGNUP")
  // }

  const navigateToTabScreen = () => {
    navigation.navigate("TabScreen")
  }

  const handleLogin = async () => {
    try {
      const url = "https://mikiyatech.com.ng/mikiyatech.com.ng/user/assets/PHP/login.php";
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", pass)
      let result = await fetch(url, {
        method: "POST",
        body: formData
      })
      result = await result.json();

      if(result){
        console.warn("Login Successfully");
      } 
    } catch (error) {
      console.warn(error); 
    }
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: colors.dark}}>
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
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 15}}>
          <View style={styles.inputContainer}>
            <Icon 
              name="mail-outline" 
              size={20} 
              color={colors.light} 
              style={styles.inputIcon}
            />
            <TextInput 
              placeholder='Email' 
              style={styles.input}
              keyboardType='email'
              onChangeText={(text) => setEmail(text)}
              value={email}/>
          </View>
        </View>

        <View style={{marginTop: 15}}>
        <View style={styles.inputContainer}>
          <Icon 
            name="lock-outline" 
            size={20} 
            color={colors.light} 
            style={styles.inputIcon}
          />
          <TextInput 
            placeholder='Password' 
            style={styles.input} 
            onChangeText={(text) => setPass(text)}
            value={pass}
            secureTextEntry/>
        </View>
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={handleLogin}>
          <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>Sign In</Text>  
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
              <Text style={{fontWeight: "bold", fontSize: 16}}>Sign in with </Text>
              <Image style={styles.btnImage} source={require("../assets/facebook.png")}/>
            </View>
            <View style={{width: 10}}/>
            <View style={styles.btnSecondary}>
              <Text>Sign in with </Text>
              <Image style={styles.btnImage} source={require("../assets/google.jpeg")}/>
            </View>
          </View>

          <View style={{
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "center",
            marginTop: 40, 
            marginBottom: 20}}>
              <Text style={{color: colors.light, fontWeight: "bold"}}>Don't have an account?</Text>
              <TouchableOpacity onPress={navigateToTabScreen}>
                <Text style={{color: colors.pink, fontWeight: "bold"}}> Sign Up</Text>
              </TouchableOpacity> 
          </View>
        </View>   
          
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
    marginTop: 25,
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
