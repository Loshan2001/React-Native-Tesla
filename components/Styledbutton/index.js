import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import styles from "./style";
const StyledButton = (props) => {
//   const type = props.type;
//   const onPress = props.onPress;
//   const content = props.content;
  const {type, onPress,content} = props

  const backgroundcolor = type === "primary" ? "#171A20cc" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    
      <Pressable
        style={[styles.CustomBtn, { backgroundColor: backgroundcolor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    
  );
};

export default StyledButton;
