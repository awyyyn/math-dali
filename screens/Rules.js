import { View, Text, ScrollView } from 'react-native'
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
            <View style={[styles.windowContainer, styles.between, styles.paddingBottom]}>
                <View style={styles.rulesContainer}>
                    <Text style={[styles.title, {}]}>
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
                            2. Each level of the game has a time limit. In order to get bonus points and move on to the next level, the player must complete the solving task as quickly as possible within the allotted time. The player's completing time and the right answer are the two different ways to score. The difficulty level will determine the score based on how quickly a player can solve the puzzle. Each additional point that the player's correct answer differs from will be determined by the number of seconds it took to solve the problem.
                        </Text> 
                    )}  
                </View> 
                <Button 
                    title={next ? "Home" : "Next"} 
                    color={next ? "" : ""}
                    size='lg'
                    type='clear'
                    onPress={() => {
                        if(next){
                            navigation.navigate('Home');
                        }else{
                            setNext(true);
                        }
                    }}
                />
            </View> 
        </Layout> 
    )
}