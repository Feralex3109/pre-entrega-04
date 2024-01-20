import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla Home
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Detalle de Producto" }} // Ajusta el título del encabezado en la pantalla Detail
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
