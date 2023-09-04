import { View } from 'react-native'
import React from 'react'
import SetButton from './components/SetButton'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from 'react-native-elements'

export default function Expert({navigation}) {

    const handleClick = (path, value) => {
        navigation.navigate('SetScreen', {
            setNumber: path,
            value: value,
            isTrue: true,
            category: 'Expert'
        })
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 15
            }}
        > 
            <Text h1>Expert</Text> 

            <View style={{marginVertical: 15, display: 'flex', gap: 20}}>
                <SetButton handleClick={handleClick} setNumber={0} value={"Set A"} disabled={true} />
                <SetButton handleClick={handleClick} setNumber={1} value={"Set B"} />
                <SetButton handleClick={handleClick} setNumber={2} value={"Set C"} />
                <SetButton handleClick={handleClick} setNumber={3} value={"Set D"} /> 
            </View>
        </ScrollView>
    )
}