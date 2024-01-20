import React, { useState, useEffect } from "react";
import { FlatList, View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import allProducts from "../Data/products.json";

const ItemListDetail = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const productsFiltered = allProducts.filter(
      (product) => product.Category === category
    );
    setProducts(productsFiltered);
  }, [category]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("ItemDetail", { id: item.id });
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ItemListDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
