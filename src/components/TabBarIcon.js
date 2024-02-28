import { StyleSheet, Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import colors from '../utils/global/colors'

const TabBarIcon = ({title, nameIcon, focused}) => {
  return (
    <View style={styles.container}>
        <Feather style={styles.icon} name={nameIcon} size={25} color={focused ? "#00FF7F" : "white"}/>
      <Text style={[styles.textFocused,!focused && styles.text]} >{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop: 25,
    },
    text:{
        color:"white",
    },
    textFocused:{
        color:colors.green
    }

})