import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../utils/global/colors";
import {Ionicons} from "@expo/vector-icons"
 

const Header =({title="BeastMode", navigation}) => {

    return <View style={styles.container}>
                {navigation.canGoBack() &&
                <Pressable style={styles.goBack} onPress={() =>navigation.goBack()} >
                <Ionicons name="chevron-back" size={25} />
                </Pressable>
                }
                <Text style={styles.text}>{title}</Text>
           </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        height:90,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        color:"white"
    },
    text:{
        marginTop:40,
        fontSize:18,
        color:"white",
        fontFamily:"Anton-Regular"
    }, 
    goBack:{
        position:"absolute",
        top:50,
        left:10,
        backgroundColorcolor:"white"
    }
})