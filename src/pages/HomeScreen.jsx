import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.balanceContainer}>
        <View style={styles.balanceContent}>
          <Ionicons style={styles.icon} name="wallet" size={40} />
          <Text style={styles.balanceText}>Total Balance</Text>
          <Text style={styles.balanceText}>₦0.00</Text>
        </View>
      </View>

      <Text style={styles.servicesTitle}>Our Services</Text>
      <View style={styles.servicesContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="wifi" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="call" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Airtime</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="bulb" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Bill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="tv" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>TV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome name="graduation-cap" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Pin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="card-outline" size={30} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data Card</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.recentTransactionTitle}>Recent Transactions</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  balanceContainer: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  balanceContent: {
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  balanceText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  servicesTitle: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  servicesContainer: {
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
  serviceIcon: {
    color: 'black',
  },
  serviceText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  recentTransactionTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15
  }
});
