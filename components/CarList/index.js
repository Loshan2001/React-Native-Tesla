import { View, Text,FlatList,Dimensions } from 'react-native'
import React from 'react'
import CarItem from '../CarItems'
import styles from './style'
import cars from './cars'
const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={cars}
      renderItem={({item}) =><CarItem car={item}/>}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CarList