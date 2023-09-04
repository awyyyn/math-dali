import { View } from 'react-native'
import { Text } from 'react-native-elements'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SetButton from './components/SetButton'

export default function Intermediate({navigation}) {
  
    const handleClick = (path, value) => {
        navigation.navigate('SetScreen', {
            setNumber: path,
            value: value,
            isTrue: true,
            category: 'Intermediate'
        })
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 15
            }}
        > 
            <Text h1>Intermediate</Text> 

            <View style={{marginVertical: 15, display: 'flex', gap: 20}}>
                <SetButton handleClick={handleClick} setNumber={1} value={"Set A"} disabled={true} />
                <SetButton handleClick={handleClick} setNumber={2} value={"Set B"} />
                <SetButton handleClick={handleClick} setNumber={3} value={"Set C"} />
                <SetButton handleClick={handleClick} setNumber={4} value={"Set D"} /> 
            </View>
        </ScrollView>
    )
}