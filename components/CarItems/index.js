import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style";
import StyledButton from "../Styledbutton";
const CarItem = (props) => {
  const { name, tagline, image , taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.BackgroundImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} 
          <Text style={styles.taglineCTA}> {taglineCTA}</Text>
          </Text>
      </View>
      <View style={styles.BtnContainer}>
        <StyledButton
          type={"primary"}
          content={"custom order"}
          onPress={() => {
            console.warn("custom order was pressed");
          }}
        />
        <StyledButton
          type={"secondary"}
          content={"existing inventory order"}
          onPress={() => {
            console.warn("existing inventory order was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
