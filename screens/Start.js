import { Dimensions, ImageBackground, ScrollViewComponent, View } from 'react-native'
import { Button, Text } from '@rneui/themed'
import React from 'react'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { LevelButton } from '../components'
import styles from './styles'

export default function Start({navigation}) {
    return ( 
        <Layout  >
            <ImageBackground 
                source={require('../assets/bg1.png')}  
                style={[{alignItems: 'center', justifyContent: 'space-around', height: Dimensions.get('screen').height}, styles.homeContainer]} 
                imageStyle={{opacity: 0.3, objectFit: 'fill'}} 
            >
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
                    titleStyle={{color: '#004E64'}}
                    containerStyle={{width: '70%', }}
                    onPress={() => navigation.navigate('Home')}
                /> 
            </ImageBackground> 
        </Layout>
    )
}