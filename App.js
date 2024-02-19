import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontColletcion } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'
import Navigator from './src/navigation/Navigator'






const App = () => {
  const [fontsLoader] = useFonts (fontColletcion)

  if(!fontsLoader) return null


  return (
    <>
    <StatusBar backgroundColor={colors.magenta} />
    <Navigator/>
   </>

  )
}






export default App
