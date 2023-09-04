import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout'
import { Button, Text, Input } from '@rneui/themed'
import { supabase } from '../lib/supabase';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { SettingsContext} from '../context/AppContext';




const initialOffset = 10;
const iintialopacity = 0;

export default function Signin({navigation}) {

    const { setSession, session } = useContext(SettingsContext)
 
     
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


      

    return (
        <Layout addStyle={{position: 'relative'}}  >
             
            <Animated.View style={[styles.error, animatedStyles]}>
                <Text style={styles.errorText}>{error && error}</Text>
            </Animated.View> 

            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={[styles.title, styles.textCenter]} >Log in</Text>
                    <Text style={[styles.subTitle, styles.textCenter]}>Teacher only</Text>
                </View>
                <View style={{width: '80%'}}>
                    <Input 
                        label="Email"
                        containerStyle={{width: '100%'}} 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        // placeholder='Username'
                    />
                    <Input 
                        label="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        containerStyle={{width: '100%'}}
                        
                        // placeholder='Username'
                    />
                    <Button 
                        title='Log in'
                        color='secondary'
                        containerStyle={{marginTop: 30}}  
                        loading={loading}
                        disabled={!email || !password ? true : false}
                        onPress={async() => { 
                            setLoading(true)
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
                            // console.log(data)
                            setEmail('')
                            setPassword('')
                            setSession(data)
                            navigation.navigate('Administrator')
                            setLoading(false)
                        }}
                    />
                
                    <Button
                        title="Sign up"
                        containerStyle={{marginTop: 20}}
                        type='outline'
                        color={'secondary'}
                         
                    />
                </View>
            </View>
        </Layout>  
    )
} 

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Belleza',
        fontSize: Dimensions.get('window').fontScale = 50,
        fontWeight: 'bold',
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
        color: '#ABA9C3',
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