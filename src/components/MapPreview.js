import { StyleSheet, Image} from 'react-native'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude},
    zoom=13
    &size=300x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:${latitude},${longitude}
    &markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=AIzaSyDfMy6pj3B0DTbmanbr2_iCaLeYIfJeMM4`

  return (
    <Image source={latitude ? {uri:mapPreviewUrl} : require("../../assets/Map.jpg")} style={styles.image}/>
  )
}


export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        borderRadius:50
     }
})