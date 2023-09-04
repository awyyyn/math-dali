import { View, Pressable, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import Layout from './Layout'
import styles from './styles'
import { SettingsContext } from '../context/AppContext'
import { Button, Icon, Text } from '@rneui/themed'
import { NavButton } from '../components'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { supabase } from '../lib/supabase'

export default function Settings({navigation}) {
 
   
    const [pressed, setPressed] = useState(false);

    const { playSound, session, logout, mute } = useContext(SettingsContext) 
 
    const handleMute = async() => { 
        playSound(!mute)
    } 

    const icon = mute ? 'volume-off' : 'volume-up'

    return (
        <Layout addStyle={{justifyContent: 'space-around', alignItems: 'center'}}>
            <Text h3 >Volume {mute ? 'Off' : 'On'}</Text>
                {/* <TouchableHighlight onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} style={{backgroundColor: 'transparent'}} containerStyle={{backgroundColor: 'transparent'}}>  */}
                    <Icon name={icon} solid size={150} onPress={handleMute} color={mute ? '#ABA9C3' : '#275DAD'} raised  disabledStyle underlayColor="#FFFFFF01"  />
                {/* </TouchableHighlight> */}
            <View style={{width: '70%', rowGap: 10}}>
                <Button
                    type='solid'
                    containerStyle={{width: '100%'}} 
                    title={session.session ? 'Dashboard' : 'Sign in'}
                    onPress={() => navigation.navigate(session.session ? 'Administrator' : 'Sign in')}
                />
                <Button
                    type='clear'
                    containerStyle={{width: '100%'}}  
                    title={'Home'}
                    onPress={() => navigation.navigate('Home')}
                />
                  {/* <Button
                    type='clear'
                    containerStyle={{width: '100%'}}  
                    title={'log'}
                    onPress={() => w()}
                />  */}
            </View>
        </Layout>
    )
}