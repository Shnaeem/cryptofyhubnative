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
        <Text> Trending Coins:</Text>
        {data.map((coins, index) => {
          return (
            <View key={index} style={styles.Cryptocontainer}>
              <Image
                style={styles.img}
                source={{ uri: `${coins.item.thumb}` }}
              />
              <Text> {coins.item.name}</Text>
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
  },
  CryptocontainerHeading: {
    fontSize: 20,
  },
  img: {
    display: "flex",
    flexDirection: "row",
    height: 25,
    width: 25,
  },
});

