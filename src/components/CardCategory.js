import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowBasic from './wrappers/ShadowBasic'
import colors from '../utils/global/colors'



const CardCategory = ({item, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductsByCategory", {categorySelected:item.title})}>
          <ImageBackground source={{uri:item.thumbnail}} style={styles.background}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
  container:{
    width:150,
    height:100,
    backgroundColor:colors.green2,
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:5,
    overflow:"hidden"
},
background:{
  width:"100%",
  height:"100%",
  resizeMode:"cover",
  alignItems:"center",
  justifyContent:"center"
},
text:{
    fontSize:16,
    color:"white",
    fontWeight:"500"
}

})