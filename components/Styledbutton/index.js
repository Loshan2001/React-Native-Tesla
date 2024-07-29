import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import styles from "./style";
const StyledButton = (props) => {
   const {type } = props
  const backgroundcolor  = type === "primary" ? "black" : "white"
  const textColor = type === "primary" ? "white" : "black"
  return (
    <View style={styles.BtnContainer}>
      <Pressable
        style={[styles.CustomBtn, {backgroundColor : backgroundcolor}]}
        onPress={() => {
          console.log("hey there");
        }}
      >
        <Text style={[styles.text,{color : textColor}]}>Custom Order</Text>
      </Pressable>

      <Pressable
        style={[styles.CustomBtn,{backgroundColor : backgroundcolor}]}
        onPress={() => {
          console.log("hey there");
        }}
      >
        <Text style={[styles.text, {color : textColor}]}>Existing Inventory</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
