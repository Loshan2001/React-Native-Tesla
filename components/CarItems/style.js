import {StyleSheet, Dimensions} from 'react-native'
const  styles = StyleSheet.create({
    carContainer:{
        width: "100%",
        height : Dimensions.get('window').height
        
      },
      titleContainer:{
        marginTop : "30%",
        width : "100%",
        alignItems : "center"
      },
      title : {
        fontSize : 40,
        fontWeight : "500", 
    
    
      },
      subTitle:{
        fontSize : 16, 
        color : "#5c5e62"
    
      },
      BackgroundImage:{
       width: "100%",
       height : "100%",
       resizeMode : "cover",
       position : "absolute"
      },

      BtnContainer : {
        position : "absolute",
        bottom : 50,
        width : "100%"
        
    },
    taglineCTA : {
      textDecorationLine : "underline"
    }
      
})

export default styles