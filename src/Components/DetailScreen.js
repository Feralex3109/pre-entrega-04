import React from "react";
import { View, Text } from "react-native";

const DetailScreen = ({ route }) => {
  // Accede a los parámetros de la ruta
  const { someParameter } = route.params;

  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>Parámetro recibido: {someParameter}</Text>
    </View>
  );
};

export default DetailScreen;
