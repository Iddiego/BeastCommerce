import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import colors from '../utils/global/colors'
import TabBarIcon from '../components/TabBarIcon'



const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
              headerShown:false,
              tabBarShowLabel:false,
              tabBarStyle: styles.tabBar,
            }}
        >
          <Tab.Screen 
          name='ShopStack' 
          component={ShopStack} 
          options= {{
              tabBarIcon: ({focused})=> 
              <TabBarIcon title="Home" nameIcon='home' focused={focused}/>
          }}
          />
          <Tab.Screen 
          name='CartStack' 
          component={CartStack}
          options= {{
              tabBarIcon: ({focused})=> 
              <TabBarIcon title="Carrito" nameIcon='shopping-cart' focused={focused}/>
        
       }}
          />
          <Tab.Screen 
          name='OrdersStack'
          component={OrdersStack}
          options= {{
              tabBarIcon: ({focused})=> 
              <TabBarIcon title="Ordenes" nameIcon='list' focused={focused}/>

       }}
          />

        </Tab.Navigator>
  </NavigationContainer>

  )
}

export default Navigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor: colors.black,
      height:80,
      position:"absolute",
      left:20,
      right:20,
      bottom:30,
      borderRadius:15,
      alignItems:"center"


    }
})