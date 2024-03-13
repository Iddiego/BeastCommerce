import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../utils/global/fonts'
import { TextInput } from 'react-native'
import colors from '../utils/global/colors'

const InputForm = ({label, value, onChangeText, isSecure, error}) => {
  return (
    <View style={styles.inputCointainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput 
         value={value}
         onChangeText={onChangeText} 
         style={styles.input}
         secureTextEntry={isSecure}
         />
         {error ? <View><Text style={styles.error}>{error}</Text></View>  : null }
    
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
   inputCointainer:{
    width:"100%",
   
   }, 
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        padding:2,
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10,
        color:"white"
    },
    titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        fontFamily:fonts.AntonRegular,
        color:"white",
        fontWeight:"900"

    },
    error:{
        fontSize:16,
        color:colors.magenta,
        fontFamily:fonts.AntonRegular,
        marginLeft:50
    }
})