import { StyleSheet, Text, View } from 'react-native'

const ShadowBasic = ({style, children}) => {
  return (
    <View style={[styles.container, style]} > 
      {children}
    </View>
  )
}

export default ShadowBasic

const styles = StyleSheet.create({ 
    container:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowOpacity:0.1,
        shadowRadius: 3.84,
        elevation:5
    }
})