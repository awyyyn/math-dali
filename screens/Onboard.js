import React, { useContext, useState } from 'react'
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Layout from './Layout'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { BlurView } from 'expo-blur'
import { Stack } from '@react-native-material/core'
import { SettingsContext } from '../context/AppContext'

export default function Onboard() {

    const { setIsLaunched } = useContext(SettingsContext)
    const navigation = useNavigation()
    const [schoolId, setSchoolId] = useState('')
    const [schoolName, setSchoolName] = useState('')



    return (
        <Layout>        
            <ImageBackground     
                source={require('../assets/onboardbg.png')}
                imageStyle={{
                    backgroundColor: "#FFFFFF",
                    height: Dimensions.get('screen').height
                }}
                style={{
                    backgroundColor: "#FFFFFF",
                }}
            >
                <ScrollView contentContainerStyle={styles.main}>
                    <Stack
                        spacing={15}
                        style={styles.form}
                    >
                        <Text 
                            h3
                            style={{
                                textAlign: 'center',
                                color: "#00667E"
                            }}
                        >Math Dali</Text>
                        <View>
                            <Input  
                                errorMessage='asd'
                                label="School Name"
                                labelStyle={styles.labelStyle}
                            />
                            
                        </View>

                        <View>
                            <Input  
                                errorMessage='asd'
                                keyboardType='decimal-pad'  
                                value={schoolId}
                                onChangeText={(text) => {
                                    if(/^\d+$/.test) setSchoolId(text)
                                }}
                                maxLength={6}
                                label="School ID Number"
                                labelStyle={styles.labelStyle}
                            />

                        </View>

                        <Button
                            title='Submit'
                            onPress={async() => {
                                await AsyncStorage.setItem('appLaunched', "LAUNCHED!")
                                setIsLaunched(true)
                                navigation.navigate('Home')
                            }}  
                        /> 
                    </Stack>
                </ScrollView>
            </ImageBackground>
        </Layout>
    )
}


const styles = StyleSheet.create({
    main: { 
        width: '100%',
        // height: '100%',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
        paddingTop: "120%", 
    },
    form: {
        padding: 20,
        width: '75%',
        bottom: 20,
        borderWidth: 1,
        borderColor: "#00667E",
        borderRadius: 10,
        shadowColor: "#000",
        position: 'relative',
        backgroundColor: "#FFFFFF00",
        marginBottom: 50,
        // shadowOffset: {
        //     width: 0,
        //     height: 8,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 10.32,
    
        // elevation: 16,
        // transform: [{translateY: '50%'}],
        // top: '-50%',
        // position: 'absolute'
    },
    labelStyle: { 
        color: "#00667EAE"
    }
})