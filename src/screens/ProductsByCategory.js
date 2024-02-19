import { FlatList, StyleSheet, Text, View } from 'react-native'
import products from '../utils/data/products.json'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({route, navigation}) => {

    const {categorySelected} = route.params
    const [productsFiltered, setProductsFiltered] = useState([])
    const [Keyword, setKeyword] = useState("")

    const handlerKeyword = (k)=> {
      setKeyword(k)
    }
    useEffect(() =>{
       if (categorySelected) setProductsFiltered(products.filter(products => products.category === categorySelected))
       if(Keyword) setProductsFiltered(productsFiltered.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const KeywordLower = Keyword.toLowerCase()
        return productTitleLower.includes(KeywordLower)
      }))
    },[categorySelected, Keyword])

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