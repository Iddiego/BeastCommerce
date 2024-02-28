import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import colors from '../utils/global/colors'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'


const Cart = () => {

   const cart = useSelector((state)=> state.cart)

  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={(item) => item.id}
      renderItem ={({item}) => <CartItem item={item}/>}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
        <Text style={styles.confirmText}>Confirmar</Text> 
        </Pressable>
        <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"space-between",
            marginBottom:130
        },
        confirmContainer:{
            flexDirection:"row",
            backgroundColor:colors.black,
            padding:25,
            justifyContent:"space-between"
        },
        confirmText:{
            fontSize:18,
            color:"white"
        }


})