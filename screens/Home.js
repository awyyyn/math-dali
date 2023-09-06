import { Dimensions, ImageBackground, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Image, Text } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import NavButton from '../components/NavButton' 
import Layout from './Layout'


export default function Home({navigation}) {

  
    const handleNavigation = (screen) => {
        navigation.navigate(`${screen}`)
    }
  

    return ( 
        <Layout>
            <ImageBackground 
                style={[styles.homeContainer, styles.bgImage]}
                imageStyle={{opacity: 0.3, objectFit: 'fill'}} 
                source={require('../assets/bg1.png')} 
            >   
                <Image 
                    source={require('../assets/math-dali.png')} 
                    style={{objectFit: 'contain', width: 300, height: 100}}     
                />

                <View style={styles.navContainer}>
                    <NavButton 
                        handlePress={handleNavigation}
                        value="Start"
                        path="Start"
                    />
                    <NavButton 
                        handlePress={handleNavigation}
                        value="Rules & Mechanics"
                        path="Rules"
                    />
                    <NavButton 
                        handlePress={handleNavigation}
                        value="Settings"
                        path="Settings"
                    /> 
                </View> 
            </ImageBackground>
        </Layout>     
    )
}

