import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategory from './CardCategory'

const Categories = () => {
  return (

        <FlatList
        data= {categories}
        keyExtractor= {item => item.id}
        renderItem= {({item}) => <CardCategory item={item}/>}
       /> 
    
  )
}

export default Categories

const styles = StyleSheet.create({})