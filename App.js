import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import { fontColletcion } from './src/utils/global/fonts'



const App = () => {
  const [fontsLoader] = useFonts (fontColletcion)
  const [categorySelected, setcategorySelected] = useState("")

  if(!fontsLoader) return null

  const selectedCategoryState = (category) => {
    setcategorySelected(category)
  }

  return (
    <>
        {categorySelected ? 
             <ProductsByCategory categorySelected={categorySelected}/>
             :
             <Home selectedCategoryState={selectedCategoryState} />
        }
    </>
  )
}






export default App

const styles = StyleSheet.create({})
