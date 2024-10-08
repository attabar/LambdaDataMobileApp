import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  // state to control visibilty of balance
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  // function to toggle the balance visibility
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  // Sample transactions data
  const transactions = [
    { id: 1, name: "Airtime Purchase", date: "2024-08-25", amount: "₦500" },
    { id: 2, name: "Data Purchase", date: "2024-08-24", amount: "₦1000" },
    { id: 3, name: "TV Subscription", date: "2024-08-23", amount: "₦1500" },
  ];

  const navigation = useNavigation();

  const navigateToBillScreen = () => {
    navigation.navigate("BILL")
  }

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <View style={styles.balanceContent}>
          <Ionicons style={styles.icon} name="wallet" size={30} />
          <Text style={styles.balanceText}>Total Balance</Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.balanceText}>{isBalanceVisible ? '₦0.00' : '***'}</Text>
            {/* Eye icon to toggle visibility */}
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Ionicons 
                name={isBalanceVisible ? 'eye' : 'eye-off'} 
                size={20} 
                color="white" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.fundContent}>
          <MaterialCommunityIcons style={styles.icon} name="folder-plus-outline" size={30} />
          <Text style={styles.balanceText}>Fund Wallet</Text>
        </TouchableOpacity>
      </View>

    <ScrollView>
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
          <TouchableOpacity style={styles.serviceItem} onPress={navigateToBillScreen}>
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

      <View style={styles.transactions}>
        <View style={styles.transactionTexts}>
          <Text style={{ fontWeight: 'bold' }}>Recent Transactions</Text>
          <TouchableOpacity style={{ backgroundColor: 'blue', padding: 5, borderRadius: 5 }}>
            <Text style={{ color: '#fff' }}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Recent transactions table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.headerCell]}>Type</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Amount</Text>
          </View>

          <ScrollView style={styles.tableBody}>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{transaction.name}</Text>
                <Text style={styles.tableCell}>{transaction.date}</Text>
                <Text style={styles.tableCell}>{transaction.amount}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      </ScrollView>
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
    display: 'flex',
    flexDirection: "row",
    backgroundColor: 'blue',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
    marginBottom: 20,
  },
  balanceContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fundContent: {
    alignItems: 'center'
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
  transactions: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  transactionTexts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'blue',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableBody: {
    maxHeight: 200,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
  },
});
