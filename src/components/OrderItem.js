import { StyleSheet, Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../utils/global/colors'

const OrderItem = ({order}) => {
  return (
       <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {new Date(order.createAt).toLocaleString()}
                </Text>
            <Text style={styles.text2}>$ {order.total}</Text>
        </View>
        <AntDesign name='search1' size={30} color="white" style={styles.icon}/> 
    </View>
    
  )
}

export default OrderItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.black,
        margin:10,
        padding:10,
        borderRadius:80,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%",
    },

    text:{
        color:colors.green,
        marginLeft:20
    },

    text2:{
        color:"white",
        marginLeft:20
    },
    icon:{
        marginRight:20
    }





})