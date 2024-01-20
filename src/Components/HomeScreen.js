import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleNavigate = () => {
    // Pasa los parámetros al navegar a la pantalla Detail
    navigation.navigate("Detail", { someParameter: "valor" });
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Ir a Detail" onPress={handleNavigate} />
    </View>
  );
};

export default HomeScreen;
