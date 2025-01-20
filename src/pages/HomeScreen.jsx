import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utility/colors';

const HomeScreen = ( ) => {
  // state to control visibilty of balance
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const data = () => {
    navigation.navigate("DATA")
  }

  // function to toggle the balance visibility
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const listItem = [
    {
      id: 1,
      text: "Fund Wallet"
    },
    {
      id: 2,
      text: "Create Wallet"
    },
    {
      id: 3,
      text: "Transfer"
    },
    {
      id: 4,
      text: "Transactions"
    },
    {
      id: 5,
      text: "Logout"
    }
  ];

  const Seperator = () => {
    return(
      <View style={{width:10}}/>
    )
  }

  const Item = ({item}) => {
    
    return(
      <TouchableOpacity style={{
        marginVertical: 15,
        width:120, 
        height:40,
        backgroundColor: colors.primary, 
        padding:7,
        borderRadius: 10, 
        // marginBottom: 10
      }}>
        <Text style={{color: colors.white, textAlign: "center", fontWeight: "bold"}}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  

  const navigation = useNavigation();

  const navigateToBillScreen = () => {
    navigation.navigate("BILL")
  }

  return (
    <View style={styles.container}>

      <View 
        style={{
          backgroundColor: colors.white,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          marginBottom: 10
          // width: 100%
        }}>
        <Text>Hi Muhammad(Vendor)</Text>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
          <MaterialCommunityIcons 
            name="bell"
            size={20}>
          </MaterialCommunityIcons>
          <Text style={{backgroundColor: colors.pink, borderRadius: 50, color: colors.white}}>+1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        
        <View style={styles.balanceContent} >
          {/* <Text style={{color: "white", marginBottom: 5}}>Hi, Muhammad</Text> */}
          <Text style={styles.balanceText}>Available Balance</Text>
          
          {/* this view takes balance digit, eye icon and  */}
          <View style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center'
                }}>
              <Text 
                style={styles.balanceText}>
                {isBalanceVisible ? '₦0.00' : '***'}
              </Text>
                <View style={{width:10}}></View>
              <TouchableOpacity 
                onPress={toggleBalanceVisibility} 
                style={{flexDirection: "row"}}>

              <   Ionicons 
                    name={isBalanceVisible ? 'eye' : 'eye-off'} 
                    size={20} 
                    color="white" 
                  />
              </TouchableOpacity>
              <View style={{width:5}}></View>
              <TouchableOpacity>
                <Ionicons 
                  name="sync" 
                  color="white" 
                  size={20}
                />
              </TouchableOpacity>
          </View>
          <Text style={styles.balanceText}>Bonus ₦0.00</Text>
        </View>

        <View style={styles.fundContent}>
          <Text style={styles.balanceText}>0018070130 <Ionicons name="copy" /></Text>
          <Text style={styles.balanceText}>Wema Bank</Text>
          <Text style={styles.balanceText}>John</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList 
        data={listItem}
        renderItem={({item}) => <Item item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Seperator}
        />
      {/* <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around", marginTop: 20}}>
          <TouchableOpacity style={styles.secondItem}><Text style={{color: colors.white}}>Fund Wallet</Text></TouchableOpacity>
          <TouchableOpacity style={styles.secondItem}><Text style={{color: colors.white}}>Create Wallet</Text></TouchableOpacity>
          <TouchableOpacity style={styles.secondItem}><Text style={{color: colors.white}}>Transfer</Text></TouchableOpacity>
          
        </View> */}

      <Text style={styles.servicesTitle}>Available Services</Text>
      <View style={styles.servicesContainer}>
        <View style={styles.card}>
        <TouchableOpacity style={styles.serviceItem} onPress={data}>
            <Ionicons name="wifi" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="call" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Airtime</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="cash" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Airtime2Cash</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem} onPress={navigateToBillScreen}>
            <Ionicons name="bulb" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="tv" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>TV Cable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome name="graduation-cap" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Exam Pin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="card-outline" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="card-outline" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="card-outline" size={25} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Data Card</Text>
          </TouchableOpacity>
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
    padding: 10,
  },
  balanceContainer: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
  },
  secondItem: {
    marginBottom: 20,
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 5
  },
  
  icon: {
    color: 'white',
  },
  balanceText: {
    color: 'white',
    fontSize: 16,
    // textAlign: 'center',
    marginVertical: 10
  },
  servicesTitle: {
    textAlign: 'left',
    color: colors.primary,
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
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding:5,
    color: colors.white,
  },
  serviceText: {
    color: colors.dark,
    marginTop: 5,
    fontSize: 10,
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

// try{
    //   let fetch = await fetch();
    //   let data = await fetch.json();

    //   console.warn(data)
    // } catch (error) {
    //   console.warn(error)
    // }