import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import FetchData from '../../../services/FetchData';

export default function LandingScreens({ navigation }) {

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
      <Text h1 style={styles.list}>The Complete Crypto List</Text>
      <Text h1 style={styles.listDesc}>Below is a of the 100 most common cryptocurrency on the market. List updates hourly</Text>

      <StatusBar style="auto" />
      <Button
        color="#6814D3"
        title="Refresh"
        onPress={getRndom}
      />

      {/* <Button 
        title="Go to home"
        onPress={()=> navigation.navigate('Home')}
      /> */}
        &nbsp;

      <ScrollView>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.Cryptocontainer}>

              <Text style={styles.listDesc}> {item.market_cap_rank}.</Text>
              <Image
                style={styles.img}
                source={{ uri: `${item.image}` }}
              />
              <Text style={styles.CryptocontainerHeading}>{item.id}</Text>
              <Text>${item.current_price}</Text>

            </View>
          );
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6814D3',
    borderWidth: 5,
    borderRadius: 10,
    fontFamily: 'Avenir',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',

  },
  imageStyle: {
    width: 100,
    height: 100,
    fontFamily: 'Avenir',

  },

  Cryptocontainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '##6814D3',
    borderWidth: 1,
    backgroundColor: '#FECE46',
    fontFamily: 'Avenir',

  },
  CryptocontainerHeading: {
    fontSize: 20,
    fontFamily: 'Avenir',

  },
  img: {
    display: "flex",
    flexDirection: "row",
    height: 25,
    width: 25,
  },
  list: {
    fontFamily: 'Avenir',
    padding: 30,
    margin: 2,
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: 30,
  },
  listDesc: {
    fontFamily: 'Avenir',
    padding: 10,
    margin: 2,
    alignItems: 'center',
    fontSize: 23,
  },

});

