import { View, Text , ImageBackground} from "react-native";
import React from "react";
import styles from "./style";
import StyledButton from "../Styledbutton";
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.BackgroundImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>starting at $69,420</Text>
      </View>
      <StyledButton 
       type = {"primary"}
       content={"custom order"} 
       onPress = {()=>{console.warn("custom order was pressed")}}/>
        <StyledButton 
       type = {"secondary"}
       content={"existing inventory order"} 
       onPress = {()=>{console.warn("existing inventory order was pressed")}}/>
    </View>
  );
};

export default CarItem;
