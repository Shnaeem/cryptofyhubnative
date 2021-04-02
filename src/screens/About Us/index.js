import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, FlatList, Linking } from 'react-native';

export default function Aboutus({ navigation }) {

  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.Heading}>
          <Text h1 style={styles.Heading}>About Us</Text>
        </View>

        <View style={styles.whoAreWe}>

          <Text h3 style={styles.whoAreWeHeading}>Who are we?</Text>
          <Text style={styles.whoAreWe}>CryptofyHub is a digital currency platform. User’s can check up-to-date digital currency prices. Coinspot is the most up to date and intuitive digital currency platform where users can check for latest digital currency rates.</Text>
        </View>

        &nbsp;

        <View style={styles.ourFeatures}>
          <Text h3 style={styles.ourFeaturesHeading}>Our Features</Text>
          <FlatList
            data={[
              { key: 'Trending Top 7 Cryptos | Display list of most popular digital currency' },
              { key: 'Search Digital currency from the list of all existing currency | Display details of individual currency' },
              { key: 'Current price | Market cap | Current value' },
              { key: 'Graph/chart with 24 hr prices | FAQ for beginners' },
            ]}
            renderItem={({ item }) => <Text style={styles.ourFeatures}>{item.key}</Text>}
          />
        </View>
        &nbsp;

        <View style={styles.developers}>
          <Text h3 style={styles.developersHeading}>The Developers</Text>
          <Text style={styles.developers} onPress={() => Linking.openURL('https://www.linkedin.com/in/naeem-shafi-93a35b67')} >Naeem</Text>
          <Text style={styles.developers} onPress={() => Linking.openURL('https://www.linkedin.com/in/nashidc')} >Nashid</Text>
          <Text style={styles.developers} onPress={() => Linking.openURL('https://www.linkedin.com/in/zipporah-najar-94bb9b140')} >Zipporah</Text>

        </View>
        &nbsp;

      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    fontFamily: 'Avenir',
  },

  Heading: {
    fontFamily: 'Avenir',
    padding: 10,
    margin: 2,
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: 30,

  },
  whoAreWe: {
    alignItems: 'center',
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,
    alignItems: 'center',

  },
  whoAreWeHeading: {
    alignItems: 'center',
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 25,
    fontWeight: "bold",
    alignItems: 'center',

  },
  ourFeatures: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
    fontSize: 20,
    alignItems: 'center',

  },
  ourFeaturesHeading: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
    fontSize: 25,
    fontWeight: "bold",
    alignItems: 'center',

  },
  developersHeading: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 25,
    fontWeight: "bold",
    alignItems: 'center',

  },

  developers: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,
    color: '#6814D3',
    alignItems: 'center',

  },

}) 