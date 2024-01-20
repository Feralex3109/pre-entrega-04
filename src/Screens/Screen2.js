// Screen2.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Screen2 = ({ navigation }) => {
  const counter = useSelector((state) => state.counter);

  return (
    <View>
      <Text>Counter in Screen2: {counter}</Text>
      {/* You can add more components or functionality here */}
    </View>
  );
};

export default Screen2;
