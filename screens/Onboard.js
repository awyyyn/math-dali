import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Layout from './Layout'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, StackActions } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { BlurView } from 'expo-blur'
import { Stack } from '@react-native-material/core'
import { SettingsContext } from '../context/AppContext'
import { supabase } from '../lib/supabase'
import { Picker } from '@react-native-picker/picker'

export default function Onboard() { 
    const { setIsLaunched } = useContext(SettingsContext)
    const navigation = useNavigation() 
    const [schools, setSchools] = useState([])
    const [initLoading, setInitLoading] = useState(false);
    const [schoolName, setSchoolName] = useState(null)
    const [schoolId, setSchoolId] = useState(null)

    useEffect(() => {
        
        (async () => {
            setInitLoading(true)
            const { data, error } = await supabase.from('administrator').select() 
            console.log(data)
            if(error) {
                console.log(error.message)
                alert(error.message)
                setInitLoading(false)
                return
            }
            
            
            setSchools(data?.map(item => {
                return {
                    id: item.school_id,
                    name: item.school_name
                }
            }))
            
            setInitLoading(false)

        })()

    }, [])
 
    console.log(schools[2], "SELECTED")



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
                    position: 'relative',
                    zIndex: 4
                }}
            >
                {/* <ScrollView contentContainerStyle={styles.main}>
                    <Stack
                        spacing={15}
                        style={styles.form}
                    > 
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
                                navigation.dispatch({
                                    ...StackActions.replace('Home')
                                })
                            }}  
                        /> 
                    </Stack>
                </ScrollView> */}
                <View
                    style={styles.main}
                >
                    <Stack spacing={15} style={styles.wrapper}>
                        <Stack>
                            <Text>School Name</Text>
                            <Picker 
                                selectedValue={schoolName}
                                onValueChange={(val, i) => {
                                    setSchoolName(val) 
                                    setSchoolId(schools[i -1]?.id)
                                }}
                            >
                                <Picker.Item label='Select School' value={''} />
                                {schools.map(item => (
                                    <Picker.Item 
                                        label={item.name} 
                                        value={item.name}
                                        key={item.id}
                                    />
                                ))}
                            </Picker>
                        </Stack>
                        <Stack>
                            <Text>School ID</Text>
                            <Picker 
                                enabled={false}
                                // dropdownIconRippleColor={'#ffffff00'}
                                // dropdownIconColor={'#ffffff00'}
                                dropdownIconColor="#FFFFFF"
                                selectedValue={schoolId ? schoolName == "" ? '' : schoolId : ''} 
                            >
                                <Picker.Item label='School ID' value={''} />
                                <Picker.Item label={schoolId} value={schoolId} />
                            </Picker>
                        </Stack>

                        <Button
                            title='Submit'
                            // containerStyle={{paddingHorizontal: 10}}
                            onPress={async() => {
                                await AsyncStorage.setItem('appLaunched', "LAUNCHED!")
                                if(!schoolId || !schoolName) {
                                    alert('Please select a school')
                                    return
                                }
                                await AsyncStorage.multiSet([['schoolId', schoolId], ['schoolName', schoolName]])
                                setIsLaunched(true)
                                // navigation.dispatch({
                                //     ...StackActions.replace('Home')
                                // })
                            }}  
                        /> 
                    </Stack>
                </View>
            </ImageBackground>
        </Layout>
    )
}


const styles = StyleSheet.create({
    main: { 
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        // height: '100%',
        // flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
        zIndex: 10
        // paddingTop: "120%", 
    },
    wrapper: {
        position: 'absolute',  
        zIndex: 99999999,
        width: Dimensions.get('screen').width,
        // height: 200
        top: "60%",
        paddingHorizontal: 20
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