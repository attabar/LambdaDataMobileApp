import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from './src/pages/Dashboard'


export default function TvSub() {

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
      
        <View style={styles.formContainer}>
        <Text style={styles.heading}>TV Sub Top Up</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Cable Name <Text style={styles.required}>*</Text>
        </Text>
        <Picker
          selectedValue={networkId}
          onValueChange={(itemValue) => setNetworkId(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="--Select Cable Name--" value="" />
          <Picker.Item label="GOTV" value="" />
          <Picker.Item label="DSTV" value="" />
          <Picker.Item label="STARTIME" value="" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Cable Plan <Text style={styles.required}>*</Text>
        </Text>
        <Picker
          selectedValue={networkId}
          onValueChange={(itemValue) => setNetworkId(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="--Select Cable Plan--" value="" />
          <Picker.Item label="GOtv Max - 2700" value="" />
          <Picker.Item label="DStv Yanga - 5100" value="" />
          <Picker.Item label="DStv Compact - 15700" value="" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          Amount <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={11}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? 'Processing...' : 'Top Up'}</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  formContainer: {
    borderRadius: 15,
    marginTop: 15,
    flexGrow: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
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
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000'
  },
  button: {
    width: '90%',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
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
