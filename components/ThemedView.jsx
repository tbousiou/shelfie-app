import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

// This component is a themed view that applies the background color based on the current color scheme
const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] || Colors.light

    return (
        <View style={[{
            backgroundColor: theme.background,
        }, style]}
            {...props}
        />
          
    )
}

export default ThemedView