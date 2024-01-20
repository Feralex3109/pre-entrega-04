import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CategoryItem from "../Components/CategoryItem";

const Categories = ({ route }) => {
  const navigation = useNavigation();
  const { setCategorySelected } = route.params;

  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    // Agrega más categorías según sea necesario
  ];

  const handleCategoryPress = (category) => {
    setCategorySelected(category);
    navigation.navigate("DetalleCategoria", { category });
  };

  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCategoryPress(item)}>
          <CategoryItem category={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});
