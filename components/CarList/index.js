import { View, Text,FlatList } from 'react-native'
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
      />
    </View>
  )
}

export default CarList