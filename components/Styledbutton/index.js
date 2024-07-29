import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import styles from "./style";
const StyledButton = (props) => {
   const {type } = props
  const backgroundcolor  = type === "primary" ? "#171A20cc" : "#FFFFFFA6"
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20"
  return (
    <View style={styles.BtnContainer}>
      <Pressable
        style={[styles.CustomBtn, {backgroundColor : backgroundcolor}]}
        onPress={props.onPress}
      >
        <Text style={[styles.text,{color : textColor}]}>{props.content}</Text>
      </Pressable>
 
    </View>
  );
};

export default StyledButton;
