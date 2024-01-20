import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./src/Navigation/navigation";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
