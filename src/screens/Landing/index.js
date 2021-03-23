import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import FetchData from '../../../services/FetchData';

export default function LandingScreens({navigation}) {
  
  const [data, setDate] = useState([]);

  const getRndom = async () => {
    const giphy = await FetchData();
    setDate(giphy.data);
    console.log(giphy.data);
  };

  useEffect(() => {
    getRndom();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Refresh Data" 
        onPress={getRndom}
      />

      {/* <Button 
        title="Go to home"
        onPress={()=> navigation.navigate('Home')}
      /> */}

      <ScrollView>
        {data.map((item, index) => {
        return (
          <View key={index} style={styles.Cryptocontainer}>
           <Text style={styles.CryptocontainerHeading}>{item.id}</Text>
           <Text>${item.current_price}</Text>
           {/* <Text>24 Hour High: {item.high_24h}</Text>
           <Text>24 Hour Low: {item.low_24h}</Text>     */}
          </View>
        );
      })} 
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  Cryptocontainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  CryptocontainerHeading:{
    fontSize:20,
  }

});

