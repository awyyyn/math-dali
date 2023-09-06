import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import { Button } from '@rneui/themed';
import { useFonts } from 'expo-font';
import Layout from './Layout';

export default function Rules({navigation}) {

    const [next, setNext] = React.useState(false);
    

    return (
        <Layout>
            <ImageBackground source={require('../assets/bg1.png')} imageStyle={{opacity: 0.3}} style={[styles.windowContainer, styles.between, styles.paddingBottom]}>
                <View style={styles.rulesContainer}>
                    <Text style={[styles.title, {color: '#335C67'}]}>
                        Rules & Mechanics
                    </Text>  
                    {!next ? (
                        <View style={{gap: 20, marginTop: 20}}>
                            <Text style={[styles.rulesParagraph, { fontFamily: 'Belleza'}]}> 
                                To understand how to play the game and earn points. It is important to thoroughly read the rules and instructions before starting.
                            </Text>
                            <Text style={[styles.rulesParagraph, { fontFamily: 'Belleza'}]}> 
                                1. The game will let the player respond to basic algebra questions at various levels of difficulty  to score points and advance to a more difficulty levels in the game. Twenty (20) different sets of basic algebraic problems must be solved for each level.
                            </Text>
                        </View>
                    ) : (
                        <Text style={[styles.rulesParagraph, { marginTop: 20}]}>
                            2. Each level of the game has a different time limit according to the level of difficulties. In order to earn points the player must complete solving the problem within the alloted time. The total score can be only be reveal after answering all the problems as well as the solution for every questions.
                        </Text> 
                    )}  
                </View> 
                <Button 
                    title={next ? "Home" : "Next"} 
                    color={next ? "" : ""}
                    size='lg' 
                    buttonStyle={{backgroundColor: '#335C67'}}
                    onPress={() => {
                        if(next){
                            navigation.navigate('Home');
                        }else{
                            setNext(true);
                        }
                    }}
                />
            </ImageBackground> 
        </Layout> 
    )
}