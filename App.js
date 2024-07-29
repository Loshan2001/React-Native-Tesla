import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItems';
import CarList from './components/CarList';
export default function App() {
  return (
 

   
    <View style={styles.container}>
      <CarList/>
  
      
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
