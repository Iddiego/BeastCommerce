import { Pressable, StyleSheet, Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../utils/global/colors'
import { useDispatch } from 'react-redux'
import { addCartItem, deleteCartItem } from '../features/cart/cartSlice'
import Counter from './Counter'
import CounterCart from './CounterCart'


const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch (addCartItem({...item,quantity}))
      
    }
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>{item.brand}</Text>     
            <Text style={styles.text2}>$ {item.price}</Text>
            <CounterCart item={item} />
        </View>
        <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
        <AntDesign name='delete' size={30} color="white" />
        </Pressable>
    
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.black,
        padding: 20,
        margin: 20,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "90%",
        alignSelf: "center", 
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        marginRight: 20, 
    },
    text: {
        color: colors.magenta,
        fontSize: 16,
        fontWeight: "bold", 
    },
    text2: {
        color: colors.green,
        fontSize: 14,
    },
});
