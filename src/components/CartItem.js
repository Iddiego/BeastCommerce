import { Pressable, StyleSheet, Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../utils/global/colors'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'


const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>{item.brand}</Text>     
            <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
            <Text style={styles.text2}>$ {item.price}</Text>
        </View>
        <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
        <AntDesign name='delete' size={30} color="white" />
        </Pressable>
    
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.black,
        padding:20,
        margin:10,
        borderRadius:60,
        flexDirection:"row",
        justifyContent: "space-between",
        height: 100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.magenta
    },
    text2:{
        color:colors.green
    }



})