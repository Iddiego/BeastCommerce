import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useEffect, useState } from 'react'
import colors from '../utils/global/colors'
import Counter from '../components/Counter'
import { useGetProductQuery } from '../app/services/shop'



const ProductsDetail = ({route}) => {
  
  const {productId} = route.params
  const {data:product, isLoading} = useGetProductQuery(productId)

  if (isLoading) return null


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0]: null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter
          initialValue={1}
          product={product} 
          textButton="Add"/>
        </View>
      </View>
    </View>
  )
}

export default ProductsDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  content:{
    width:"100%",
    position:"relative"
  },
  image:{
    width:"100%",
    height:300
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25
  },
  containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
  buyNow:{
    backgroundColor:colors.magenta,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"white"
  }

})