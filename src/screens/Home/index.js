import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "white",
    height: 40,
    width: 200,
    borderRadius: 30,
    marginTop: 10,
  },
  img: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    width: 200,
  },
  divStyle: {
    margin: 10,
  },
});
const HomeScreen = () => {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState("");
  const handleSearchGiphy = async () => {
    const apikey = "ULw4daLtlqPVJvDNBELYe87ltTEKWn5U";
    const url = "http://api.giphy.com/v1/gifs/search";
    const response = axios
      .get(`${url}?api_key=${apikey}&q=${term}`)
      .then((res) => {
        setGifs(res.data.data);
      });
    return response;
  };
  const handbutton = () => {
    handleSearchGiphy();
  };
  useEffect(() => {
    handbutton();
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          width: 180,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
        }}
        placeholder="search for data"
        onChangeText={(val) => updateTerm(val)}
      />

      <View style={styles.btn}>
        <Button title=" search" onPress={handbutton} />
      </View>

      {gifs.map((item, index) => {
        return (

          <ScrollView key={index} style={styles.divStyle}>
             <Image
              style={styles.img}
              source={{ uri: `${item.images.original.url}` }}
            />
          </ScrollView>

        );

      })}
    </View>
  );
};
export default HomeScreen;