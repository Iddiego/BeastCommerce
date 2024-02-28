import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontColletcion } from './src/utils/global/fonts'
import Navigator from './src/navigation/Navigator'
import colors from './src/utils/global/colors'
import { store } from './src/app/store'
import { Provider } from 'react-redux'






const App = () => {
  const [fontsLoader] = useFonts (fontColletcion)

  if(!fontsLoader) return null


  return (
    <>
    <StatusBar backgroundColor={colors.magenta} />
    <Provider store={store}>
      <Navigator/>
    </Provider>
   </>

  )
}






export default App
