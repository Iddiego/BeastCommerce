import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../utils/global/colors";
import {Ionicons} from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { deleteSession } from "../utils/db";
 

const Header =({title="BeastMode", navigation}) => {
   
    const dispatch = useDispatch()
    const idToken = useSelector((state) => state.auth.idToken)

    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return <View style={styles.container}>
                {navigation.canGoBack() &&
                <Pressable style={styles.goBack} onPress={() =>navigation.goBack()} >
                <Ionicons name="chevron-back" size={25} />
                </Pressable>
                }
                <Text style={styles.text}>{title}</Text>
                {idToken && (
                    <Pressable style={styles.logoutIcon} onPress={onLogout} >
                        <Ionicons name="chevron-back" size={24} color="#FF3985" />
                    </Pressable>
                )

                }
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
    },
    logoutIcon:{
        position:"absolute",
        right:10,
        bottom:15
    }
})