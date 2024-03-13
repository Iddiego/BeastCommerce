import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/TabBarIcon'
import colors from '../utils/global/colors'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
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
                <TabBarIcon title="Pedido" nameIcon='list' focused={focused}/>

         }}
        />

             <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Perfil" nameIcon="user" focused={focused}/>
                    }}
            />

</Tab.Navigator>
  )
}

export default TabNavigator

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