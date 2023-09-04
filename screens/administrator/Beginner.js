import { Text } from 'react-native-elements'
import React from 'react'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'
import SetButton from './components/SetButton'

export default function Beginner({navigation}) {
 
    const handleClick = (path, value) => {
        navigation.navigate('SetScreen', {
            setNumber: path,
            value: value,
            isTrue: true,
            category: 'Beginner'
        })
    }

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 15
            }}
        > 
            <Text h1>Beginner</Text> 

            <View style={{marginVertical: 15, display: 'flex', gap: 20}}>
                <SetButton handleClick={handleClick} setNumber={1} value={"Set A"} disabled={true} />
                <SetButton handleClick={handleClick} setNumber={2} value={"Set B"} />
                <SetButton handleClick={handleClick} setNumber={3} value={"Set C"} />
                <SetButton handleClick={handleClick} setNumber={4} value={"Set D"} /> 
            </View>
        </ScrollView>
    )
}