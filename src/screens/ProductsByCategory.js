import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import LoadingSpinner from '../components/LoadingSpinner'

const ProductsByCategory = ({route, navigation}) => {

    const {categorySelected} = route.params
    const {data:products, isError, isLoading, isSuccess, error} = useGetProductsByCategoryQuery (categorySelected)
    const [productsFiltered, setProductsFiltered] = useState([])
    const [Keyword, setKeyword] = useState("")
    const handlerKeyword = (k)=> {
      setKeyword(k)
    }
    useEffect(() =>{
       setProductsFiltered(products)
       if(Keyword) setProductsFiltered(products.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const KeywordLower = Keyword.toLowerCase()
        return productTitleLower.includes(KeywordLower)
      }))
    },[categorySelected, Keyword, products])
   
    if(isLoading) return <LoadingSpinner/>
    if(isError) return <Error/>
    if(isSuccess && products.length === 0) return <View><Text>No hay productos Parce</Text></View>
  



  return (
    <>
   
    <Search handlerKeyword={handlerKeyword} />
    <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductByCategory  navigation={navigation} item={item} />}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center"
},
horizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10
}
})