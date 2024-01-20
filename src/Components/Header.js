import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../Global/Colors";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue2,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  text: {
    fontSize: 25,
    color: Colors.white,
  },
});
