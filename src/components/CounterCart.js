import { StyleSheet, Text, View, Button } from 'react-native'
import colors from '../utils/global/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'



const CounterCart = ({item}) => {
   
    const dispatch = useDispatch()

    

 
    return (
      <View style={styles.counterContainer}>
        <Button title='+' onPress={()=> dispatch(addCartItem({...item,quantity:1}))}/>
        <Text style={styles.input}>{item.quantity}</Text>
        <Button title='-' onPress={()=> dispatch(addCartItem({...item,quantity:-1}))}/>
      </View>
  )
}

export default CounterCart

const styles = StyleSheet.create({
  counterContainer: {
    borderRadius:20,
    backgroundColor:colors.green,
    width:200,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    margin: 10
  },
  input:{
    width:50,
    textAlign:"center",
    color:colors.magenta

  }
})
