import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useContext } from 'react'
import { SettingsContext } from '../context/AppContext'
import { useNavigation } from '@react-navigation/native'

export default function Logout() {
    const navigation = useNavigation()
    const { logout } = useContext(SettingsContext)


    return (
        <TouchableOpacity onPress={() => {
            logout() 
            navigation.navigate('Home')
        }} style={{display: 'flex', marginRight: 10, flexDirection: 'row', gap: 5}}>
            <Text style={{color:"#FF0000"}}>Log out</Text>
            <Icon name='logout' color='#FF0000' />
        </TouchableOpacity>
    )
}