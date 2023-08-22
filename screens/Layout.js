import { View, Text } from 'react-native'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { useFonts } from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen'
import { ScrollView } from 'react-native-gesture-handler'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'


SplashScreen.preventAutoHideAsync();


export default function Layout({children, addStyle}) {

    const [fontLoaded] = useFonts({
        'Belleza': require('../assets/fonts/Belleza-Regular.ttf')
    })
    
    const onLayoutRootView = useCallback(async () => {
        if (fontLoaded) {
        await SplashScreen.hideAsync();
        }
    }, [fontLoaded]);

    if (!fontLoaded) {
        return null;
    }
        
    return (
        <SafeAreaView>
            <ExpoStatusBar style='auto' />
            <ScrollView contentContainerStyle={[styles.windowContainer, addStyle]} onLayout={onLayoutRootView}> 
                {children}  
            </ScrollView>
        </SafeAreaView>
    )
}