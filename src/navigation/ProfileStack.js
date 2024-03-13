import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../screens/Profile'
import ImageSelector from '../screens/ImageSelector'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/profile'


const Stack = createNativeStackNavigator()
const ProfileStack = () => {
      return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={({navigation}) => {
            return{
                header: () => {
                    return <Header title='Perfil Del Parcero' navigation={navigation}/>
                }
            }  
        }}
    >
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='ImageSelector' component={ImageSelector}/>
    </Stack.Navigator>
  )
}

export default ProfileStack 