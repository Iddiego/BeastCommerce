import { StyleSheet, View, Image, Text} from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery} from '../app/services/profile'
import { useGetUserlocationQuery } from '../app/services/profile'
import colors from '../utils/global/colors'


const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data:locationFormatted} = useGetUserlocationQuery(localId)
    const {data} = useGetImageQuery(localId)
  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/Logo.png")}
            style={styles.image}
            resizeMode='contain'
        />
        <Text style={styles.text}>{locationFormatted?.address}</Text>
        <AddButton title={"Fotico Parce"} onPress={()=> navigation.navigate("ImageSelector")}/>
        <AddButton title={"¿Direcciòn mi pana?"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text:{
        fontSize:16,
        marginVertical:10,
        color: colors.green
    }
})