import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Simulación de carga de datos de productos
    const allProducts = [
      { id: 1, title: "Product 1", description: "Description 1", price: "$10" },
      { id: 2, title: "Product 2", description: "Description 2", price: "$20" },
      // ... más productos
    ];

    const productFind = allProducts.find((product) => product.id === id);
    setProduct(productFind || {});
  }, [id]);

  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
