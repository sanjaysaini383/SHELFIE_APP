import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/Image/logo_dark.png'
import LightLogo from '../assets/Image/logo_light.png'

const ThemedLogo = () => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} />
  )
}

export default ThemedLogo