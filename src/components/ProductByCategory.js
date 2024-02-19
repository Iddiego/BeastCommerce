import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../utils/global/colors'


const ProductByCategory = ({item, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductsDetail",{productId:item.id})} style={styles.container} >
        <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode='cover' />
        <Text style={styles.text} >{item.id}. {item.title}</Text>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
   
    container:{
        backgroundColor:colors.green,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:55,
        flexDirection:"row",
        alignItems:"center", 
        justifyContent: "space-between",
        gap:20,
       
    },
    text:{
        width:"50%",
        fontSize:20,
        flexWrap:"wrap"
    },
    image: {
        width:"30%",
        height:"30%",
        minWidth:90,
        minHeight:90,
        borderRadius:55
    }


})