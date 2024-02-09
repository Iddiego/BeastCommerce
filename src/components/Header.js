import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/global/colors";


const Header =({title="hola"}) => {

    return <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
           </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.magenta,
        height:120,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        paddingTop:40,
        fontSize:25,
        color:"white",
        fontFamily:"Anton-Regular"
    }
})