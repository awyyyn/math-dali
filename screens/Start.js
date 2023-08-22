import { ScrollViewComponent, View } from 'react-native'
import { Button, Text } from '@rneui/themed'
import React from 'react'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { LevelButton } from '../components'

export default function Start({navigation}) {
    return (
        <Layout addStyle={{alignItems: 'center', justifyContent: 'space-around'}}>
            <View>
                <Text h3 style={{textTransform: 'uppercase', textAlign: 'center'}}>Choose level of</Text>
                <Text h3 style={{textTransform: 'uppercase', textAlign: 'center'}}>difficulty</Text>
            </View>

            <ScrollView  style={{maxHeight: '60%', width: '100%'}} contentContainerStyle={{alignItems:'center'}}>
                {['Beginner', 'Intermediate', 'Expert'].map(item => (
                    <LevelButton 
                        key={item}
                        handlePress={(item) => navigation.navigate(item) }
                        value={item}
                    />
                ))}
            </ScrollView>
            
            <Button
                type='clear'
                size='lg'
                title='Home'
                containerStyle={{width: '70%', }}
                onPress={() => navigation.navigate('Home')}
            />
        </Layout>
    )
}