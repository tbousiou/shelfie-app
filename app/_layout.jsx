import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {

    const colorScheme = useColorScheme()
    // console.log("RootLayout colorScheme: ", colorScheme)
    const theme = Colors[colorScheme] || Colors.light
    // console.log("RootLayout colorScheme: ", theme)


    return (
        <>  
            <StatusBar style="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }} >
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ title: "Home", }} />
                
            </Stack>
            
        </>


    )
}

export default RootLayout

const styles = StyleSheet.create({})