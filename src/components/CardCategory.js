import { StyleSheet, Text, View } from 'react-native'
import ShadowBasic from './wrappers/ShadowBasic'
import colors from '../utils/global/colors'



const CardCategory = ({item}) => {
  return (
<ShadowBasic style={styles.container}>
    <Text style={styles.text}>{item}</Text>
</ShadowBasic>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        height:35,
        backgroundColor: colors.green,
        marginHorizontal: "10%",
        marginVertical:9,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,


    },

    text:{
        fontSize:16

    }

})