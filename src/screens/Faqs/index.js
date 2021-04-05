import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function Faqs({ navigation }) {

  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.Heading}>
          {/* HEADING */}
          <Text h1 style={styles.Heading}>FAQs</Text>
          {/* HEADING DESCRIPTION */}

          <Text h3 style={styles.HeadingDesc}>Below are some common questions users have when first getting into crypto. Take a look to learn more...</Text>
        </View>

        <View style={styles.question1}>

          <Text h3 style={styles.questionYellow}>What is cryptocurrency?</Text>
          <Text h4 style={styles.question1}>Cryptocurrency is a type of virtual currency that uses cryptography to secure transactions
          that are digitally recorded on a distributed ledger, such as a blockchain.  A transaction involving cryptocurrency
          that is recorded on a distributed ledger is referred to as an “on-chain” transaction; a transaction that is not recorded on
      the distributed ledger is referred to as an “off-chain” transaction.</Text>
        </View>
&nbsp;
      <View style={styles.question2}>

          <Text h3 style={styles.questionPurple}>What is market cap?</Text>
          <Text h4 style={styles.question2}>The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market Cap = Current Price x Circulating Supply</Text>
        </View>
      &nbsp;
      <View style={styles.question3}>

          <Text h3 style={styles.questionYellow}>What is fully diluted market cap?</Text>
          <Text h4 style={styles.question3}>The market cap if the max supply was in circulation.
          &nbsp;
          Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows.
</Text>
        </View>
      &nbsp;
      <View style={styles.question4}>

          <Text h3 style={styles.questionPurple}>What is volume?</Text>
          <Text h4 style={styles.question4}>A measure of how much of a cryptocurrency was traded in the last 24 hours.</Text>
        </View>
      &nbsp;
      <View style={styles.question5}>

          <Text h3 style={styles.questionYellow}>What is circulating supply?</Text>
          <Text h4 style={styles.question5}>The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market</Text>
        </View>
      &nbsp;
      <View style={styles.question6}>

          <Text h3 style={styles.questionPurple}>What is max supply?</Text>
          <Text h4 style={styles.question6}>The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market.
        If this data has not been submitted by the project or verified by the CMC team, max supply shows.</Text>
        </View>
      &nbsp;
      <View style={styles.question7}>

          <Text h3 style={styles.questionYellow}>What is total supply?</Text>
          <Text h4 style={styles.question7}>The amount of coins that have been already created, minus any coins that have been burned. It is analogous to the outstanding shares in the stock market.
        If this data has not been submitted by the project or verified by the CMC team, total supply shows.</Text>
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

  HeadingDesc: {
    fontFamily: 'Avenir',
    padding: 10,
    margin: 2,
    alignItems: 'center',
    fontSize: 23,
  },
  question1: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,

  },
  question2: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
    fontSize: 20,

  },
  question3: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,

  },
  question4: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
    fontSize: 20,

  },
  question5: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,

  },
  question6: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
    fontSize: 20,

  },
  question7: {
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
    fontSize: 20,

  },
  questionPurple: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#CBC3E3',
  },

  questionYellow: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
    margin: 2,
    fontFamily: 'Avenir',
    backgroundColor: '#FECE46',
  }
}) 