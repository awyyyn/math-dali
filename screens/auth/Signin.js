import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout'
import { Button, Text, Input, Icon } from '@rneui/themed';
import { Link } from '@react-navigation/native'
import { supabase } from '../../lib/supabase';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { SettingsContext} from '../../context/AppContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const initialOffset = 10;
const iintialopacity = 0;

export default function Signin() {

    const { setSession, session, setSchoolInfo } = useContext(SettingsContext)
    const navigation = useNavigation()

    const [showPass, setShowPass] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const right = useSharedValue(100);
    const opacity = useSharedValue(iintialopacity)

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: right.value }],
        opacity: opacity.value,
    }));
 

    useEffect(() => {

        console.log('asd')

    }, [])

      

    return (
        <Layout addStyle={{position: 'relative'}}  >
             
            <Animated.View style={[styles.error, animatedStyles]}>
                <Text style={styles.errorText}>{error && error}</Text>
            </Animated.View> 

            <ImageBackground source={require('../../assets/bg.jpg')} imageStyle={{opacity: 0.05}}>
                <View style={styles.container}>

                    <View style={styles.center}>
                        <Text style={[styles.title, styles.textCenter]} >Log in</Text>
                        <Text style={[styles.subTitle, styles.textCenter]}>Teacher only</Text>
                    </View>
                    <View style={{width: '80%'}}>
                        <Input 
                            label="Email"
                            containerStyle={{width: '100%'}} 
                            labelStyle={{color: '#335C67'}}
                            value={email}
                            cursorColor="#123"
                            onChangeText={(text) => setEmail(text)}
                            // placeholder='Username'
                            leftIcon={
                                <Icon
                                    name='alternate-email'
                                    color="#344E41"
                                    // nextFocusDown={1}
                                />
                            }
                        />
                        <Input 
                            labelStyle={{color: '#335C67'}}
                            label="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={showPass}
                            cursorColor="#123"
                            containerStyle={{width: '100%'}}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    color="#344E41"
                                />
                            }
                            rightIcon={
                                <TouchableOpacity onPress={() => setShowPass(p => !p)}>
                                    <FontAwesome 
                                        name={showPass ? 'eye-slash' : 'eye'} 
                                        size={20}  
                                        color="#344E41" 
                                    />
                                </TouchableOpacity>
                            }
                            // placeholder='Username'
                        />
                        {/* <View>
                            <TouchableOpacity
                            
                            onPress={() => navigation.navigate('forgotPassword')}
                            > 
                                <Text style={{textAlign: "right"}}>Forgot Password ?</Text> 
                            </TouchableOpacity>
                        </View> */}
                        <Button 
                            title='Log in' 
                            buttonStyle={{backgroundColor: '#335C67'}}
                            containerStyle={{marginTop: 30}}  
                            loading={loading}
                            disabled={!email || !password ? true : false}
                            onPress={async() => { 
                                setLoading(true);
                                const { data, error } = await supabase.auth.signInWithPassword({email, password})


                                if(error) {
                                    setLoading(false)
                                    right.value = withSpring(10)
                                    opacity.value = withSpring(1)
                                    setError(error.message);
                                    setTimeout(() => { 
                                        right.value = withSpring(150)
                                        opacity.value = withSpring(0)
                                        setError(error.message);
                                    }, 3000)
                                    return 
                                }

                                const { data: adminData, error: adminError} = await supabase.from('administrator').select().eq('email', email).single();
                            
                                if(adminError) {
                                    return alert(adminError.message);
                                }

                                // console.log()

                                // console.log(data) 
                                await AsyncStorage.multiSet([['role', `${adminData?.role}`], ['schoolId', `${adminData?.school_id}`], ['schoolName', `${adminData?.school_name}`]] )
                                // await AsyncStorage.multiSet([['role', `${adminData?.role}`], ['schoolId', `${adminData?.school_id}`], ['schoolName', `${adminData?.school_name}`]] )
                                
                                const aaaa = await AsyncStorage.multiGet(['schoolId', 'schoolName', 'role'])
                                console.log(aaaa)
                                setEmail('')
                                setPassword('')
                                setSession(data)
                                navigation.navigate('Administrator')
                                setLoading(false)
                            }}
                        />
                    {/* 
                        <Button
                            title="Sign up"
                            containerStyle={{marginTop: 20}}
                            type='outline'r
                            color={'secondary'}
                            onPress={() => navigation.navigate("SignUp")}
                        />
                        */}
                    </View>
                </View>
            </ImageBackground>
        </Layout>  
    )
} 

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Belleza',
        fontSize: Dimensions.get('window').fontScale = 50,
        fontWeight: 'bold',
        color: '#335C67',
        textShadowColor: '#ABA9C3',
        textShadowOffset: {
            height: 2,
            width: 2
        }
    },
    textCenter: {
        textAlign: 'center'
    },  
    subTitle: {
        color: '#335C6790',
        fontSize: Dimensions.get('window').fontScale = 20
    },
    center: {
        alignSelf: "center"
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 50
    },
    error: {
        position: 'absolute',
        top: Dimensions.get('window').height = 30,
        right: Dimensions.get('window').width = 30,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
        opacity: 0.3
    },
    errorText: {
        color: 'white',
        fontSize: Dimensions.get('window').fontScale = 14
    }

})