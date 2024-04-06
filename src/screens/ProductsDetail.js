import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/global/colors'
import Counter from '../components/Counter'
import { useGetProductQuery } from '../app/services/shop'
import { useDispatch } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyListComponent from '../components/EmptyListComponent'
import { addCartItem } from '../features/cart/cartSlice'



const ProductsDetail = ({route, navigation}) => {
  const dispatch = useDispatch()

  const {productId} = route.params
  const {data:product, isLoading, isError, isSuccess} = useGetProductQuery(productId)



  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡La embarro parcero!" textButtton="Recargar" onRetry={()=>navigation.goBack()} />
  if(isSuccess && product === null) return <EmptyListComponent message="No hay productos parcero"/>


  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product?.description}</Text>
        </View>
        <View style={styles.containerPrice }>
          <Text style={styles.price}>$ {product?.price}</Text>
          <Pressable style={styles.buyNow} onPress={()=>dispatch(addCartItem(product))}>
            <Text style={styles.buyNowText}>Carrito</Text>
          </Pressable>
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