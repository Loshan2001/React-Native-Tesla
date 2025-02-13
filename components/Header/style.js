import {StyleSheet } from 'react-native'
const  styles = StyleSheet.create({
    headerContainer:{
        position : "absolute",
        top  : 50,
        zIndex : 100,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        width : "100%",
        paddingHorizontal : 20
    },
    logo :{
        width:100,
        height : 20,
        resizeMode : "contain"
    },
    menu:{
        width:25,
        height : 25
    }
})

export default styles
