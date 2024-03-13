import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ProductsByCategory = ({route, navigation}) => {

    const {categorySelected} = route.params
    const {data:product, isError, isLoading} = useGetProductsByCategoryQuery (categorySelected)
    const [productsFiltered, setProductsFiltered] = useState([])
    const [Keyword, setKeyword] = useState("")

    const handlerKeyword = (k)=> {
      setKeyword(k)
    }
    useEffect(() =>{
       setProductsFiltered(product)
       if(Keyword) setProductsFiltered(product.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const KeywordLower = Keyword.toLowerCase()
        return productTitleLower.includes(KeywordLower)
      }))
    },[categorySelected, Keyword, product])

    if (isLoading) return <View><Text>cargando....</Text></View>

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

const styles = StyleSheet.create({})