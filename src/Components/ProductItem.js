import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Global/Colors";

const ProductItem = ({ title, productId }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Puedes enviar parámetros a la pantalla de detalles del producto
    navigation.navigate("ProductDetail", { productId });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue2,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontFamily: "Josefin",
    color: Colors.white,
  },
});

export default ProductItem;
