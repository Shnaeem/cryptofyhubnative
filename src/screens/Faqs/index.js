import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function Faqs({navigation}) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          <View style={styles.Cryptocontainer}>
           <Text>Faqs</Text>
          </View>
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
})