import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import TrendingData from '../../../services/TrendingData';

export default function HomeScreen({ navigation }) {

  const [data, setDate] = useState([]);

  const getRndom = async () => {
    const giphy = await TrendingData();
    setDate(giphy.data.coins);
    console.log(giphy.data.coins);
  };

  useEffect(() => {
    getRndom();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        <Text h1 style={styles.logo}>Welcome to CryptofyHUB!</Text>
        <Text h1 style={styles.sling}>You're likely here because you're interested in the following: 🎮 💻 📱 ⌚️</Text>
        <Text h1 style={styles.slingTwo}>And of course: 💰 💳 💸</Text>
        <Text h1 style={styles.trendingList}>So let's get started with a list of the top 7 cryptocurrencies</Text>

        {data.map((coins, index) => {
          return (
            <View key={index} style={styles.Cryptocontainer}>
              <Image
                style={styles.img}
                source={{ uri: `${coins.item.thumb}` }}
              />
              <Text style={styles.sling}> {coins.item.name}</Text>
              <Text>{coins.item.symbol}</Text>


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
    fontFamily: 'Avenir',
    alignItems: 'center',

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
  logo: {
    fontFamily: 'Avenir',
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: 30,
    alignItems: 'center',
    margin: 2,


  },
  sling: {
    fontFamily: 'Avenir',
    alignItems: 'center',
    fontSize: 23,
    alignItems: 'center',
    margin: 2,

  },
  slingTwo: {
    fontFamily: 'Avenir',
    alignItems: 'center',
    fontSize: 23,
    alignItems: 'center',
    margin: 2,

  },
  trendingList: {
    fontFamily: 'Avenir',
    alignItems: 'center',
    fontSize: 23,
    alignItems: 'center',
    margin: 2,

  },

});

