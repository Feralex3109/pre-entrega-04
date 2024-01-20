import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CategoryItem from "../Components/CategoryItem";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <FlatList
        data={Categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("ItemListCategories", { categoryName: item });
            }}
          >
            <CategoryItem category={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
