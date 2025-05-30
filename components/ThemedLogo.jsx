import { Image, useColorScheme } from 'react-native'

// Import images
import logoDark from '../assets/img/logo_dark.png' // Ensure you have a dark logo image in the assets folder
import logoLight from '../assets/img/logo_light.png' // Ensure you have a light logo image in the assets folder

// This component is a themed card that applies the background color based on the current color scheme
const ThemedLogo = ({...props }) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? logoDark : logoLight

    return (
        <Image source={logo} {...props} />

    )
}

export default ThemedLogo