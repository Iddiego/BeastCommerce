import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductsDetail from '../screens/ProductsDetail'
import Home from '../screens/Home'


const Stack = createNativeStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({route, navigation})=>{
          return {
            header: () =>{
               return <Header 
                       navigation={navigation}
                       title={route.name === "Home" ? "Categorias" : 
                        route.name === "ProductsByCategory" ?
                        route.params.categorySelected: "Detalle"
                       } />
            }
          }
        }}
        >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductsByCategory' component={ProductsByCategory}/>
        <Stack.Screen name='ProductsDetail' component={ProductsDetail}/>
        </Stack.Navigator>
  </NavigationContainer>

  )
}

export default Navigator

const styles = StyleSheet.create({})