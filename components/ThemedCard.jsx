import { Stylesheet, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

// This component is a themed card that applies the background color based on the current color scheme
const ThemedCard = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] || Colors.light

    return (
        <View style={[{
            backgroundColor: theme.uiBackground,
        }, styles.card, style]}
            {...props}
        />
          
    )
}

export default ThemedCard

const styles = Stylesheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})