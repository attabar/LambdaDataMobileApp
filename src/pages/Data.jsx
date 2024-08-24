import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Data() {

  const [networkId, setNetworkId] = useState('');
  const [planId, setPlanId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dataType, setDataType] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (networkId) {
      fetch('./assets/PHP/dataOptions.php', {
        method: 'POST',
        body: JSON.stringify({ network_id: networkId }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the data, populate plan options
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [networkId]);

  useEffect(() => {
    if (planId) {
      fetch('./assets/PHP/dataOptions.php', {
        method: 'POST',
        body: JSON.stringify({ plan_id: planId }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setDataType(data.fetchDataType);
            setAmount(data.fetchPrice);
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [planId]);

  const handleSubmit = () => {
    if (!networkId || !planId || !dataType || !amount || !mobileNumber) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('network_id', networkId);
    formData.append('plan_id', planId);
    formData.append('data_type', dataType);
    formData.append('amount', amount);
    formData.append('mobile_number', mobileNumber);

    fetch('./assets/PHP/buyData.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert(data.success ? 'Success' : 'Error', data.message);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Error', error.message);
        setIsSubmitting(false);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>

      {/* <View style={[styles.sidebar, isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed]}>
        <ScrollView style={styles.sidebarContent}>
          <TouchableOpacity onPress={handleDashboard}>
            <Text style={styles.menuItem}><Ionicons name="home-outline" size={20} /> Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}><Icon name="user" size={20} /> Account <Ionicons name="chevron-down-outline" size={20} /></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}><Ionicons name="cash-outline" size={20} /> Fund Wallet</Text>
          </TouchableOpacity>
        
          
        </ScrollView>
      </View> */}

      <Text style={styles.transactionHistoryTitle}>DATA HISTORY</Text>  
      <View style={styles.transactionHistoryContainer}>
        <View style={styles.card}>
        <TouchableOpacity style={styles.serviceItem}>
          {/* <Ionicons name="wifi-outline" size={20} /> */}
          <Image source={require("../assets/mtn.jpeg")} style={styles.image}/>
          <Text style={styles.menuItem}>MTN</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.serviceItem}>
          {/* <Ionicons name="call-outline" size={20} />  */}
          <Image source={require("../assets/airtel.jpeg")} style={styles.image}/>
          <Text style={styles.menuItem}>AIRTEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          {/* <Ionicons name="tv-outline" size={20} /> */}
          <Image source={require("../assets/glo.jpeg")} style={styles.image}/>
          <Text style={styles.menuItem}>GLO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          {/* <Ionicons name="bulb-outline" size={20} /> */}
          <Image source={require("../assets/9mobile.jpeg")} style={styles.image}/>
          <Text style={styles.menuItem}>9MOBILE</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.formContainer}>
        <Text style={styles.heading}>Buy Data</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Network <Text style={styles.required}>*</Text>
        </Text>
        <Picker
          selectedValue={networkId}
          onValueChange={(itemValue) => setNetworkId(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="--Select Network--" value="" />
          <Picker.Item label="MTN" value="1" />
          <Picker.Item label="Airtel" value="3" />
          <Picker.Item label="Glo" value="2" />
          <Picker.Item label="9Mobile" value="6" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Plan Type <Text style={styles.required}>*</Text>
        </Text>
        <Picker
          selectedValue={planId}
          onValueChange={(itemValue) => setPlanId(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="------" value="" />
          {/* Populate this with options based on the selected network */}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Phone Number <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={11}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Data Type <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={dataType}
          onChangeText={setDataType}
          editable={false}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Price <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          editable={false}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? 'Processing...' : 'Purchase'}</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formContainer: {
    borderRadius: 15,
    marginTop: 10,
    flexGrow: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 15,
  },
  formGroup: {
    width: '90%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  button: {
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
  },
  transactionHistoryTitle: {
    fontSize: 17,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    marginVertical: 10 
  },
  transactionHistoryContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    elevation: 4,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  }
});
