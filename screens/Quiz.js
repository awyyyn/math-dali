import { View, Text, Pressable, Dimensions, ImageBackground } from 'react-native'
// import React from 'react'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { useState, useEffect, useCallback } from 'react'
import { Button, Input, ListItem } from '@rneui/themed'
import styles from './styles'
import { Stack } from '@react-native-material/core'
import { numOfSets } from '../lib/helpers'

export default function Quiz({route, navigation}) {
 
    const { data } = route.params
    const [time, setTime] = useState(10); 
    const [start, setStart] = useState(false);
    const [allAnswer, setAllAnswer] = useState({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
    });
    const [answer, setAnswer] = useState(''); 
    const [num, setNum] = useState(0);
    const [isRunning, setIsRunning] = useState(false);  
    const [score, setScore] = useState(0)

    if(time < 0){
        if(num === 0){
            setAllAnswer(p => ({...p, answer1: answer}))
            data[num].answer == answer && setScore(s => s + 1)
        }
        if(num === 1){
            setAllAnswer(p => ({...p, answer2: answer}))
            data[num].answer == answer && setScore(s => s + 1)
        }
        if(num === 2){
            setAllAnswer(p => ({...p, answer3: answer}))
            data[num].answer == answer && setScore(s => s + 1)
        }
        if(num === 3){
            setAllAnswer(p => ({...p, answer4: answer}))
            data[num].answer == answer && setScore(s => s + 1)
        }
        if(num === 4){
            setAllAnswer(p => ({...p, answer5: answer}))
            data[num].answer == answer && setScore(s => s + 1)
        } 


        setNum(n => n + 1); 
        setIsRunning(false)
        
        setTime(10);
        if(num > 4){
            setIsRunning(false)
        }else{
            setIsRunning(true)
        }
    } 

    useEffect(() => {
        let interval
        if(isRunning && time >= 0 && num < 5){
            interval = setInterval(() => {
                setTime(p => p - 1 )
            }, 1000) 
        }else{
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [start, isRunning])
 
 
    if(num > 4){ 

        return (
            <Layout> 
                <ImageBackground 
                    imageStyle={{opacity: 0.2, objectFit: 'fill'}} 
                    source={require("../assets/bg1.png")} 
                    style={{height: '100%'}}
                > 
                    <View 
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 20
                        }}
                    >
                        
                        <Text 
                            style={{
                                // alignSelf: 'center',
                                marginTop: 20,
                                fontSize: 30,

                            }}
                        >
                            RESULT
                        </Text>  

                    </View>

                    <Stack direction='row' justify='between' ph={20}>
                        <Text>Score</Text>
                        <Text>{score * 20} / 100</Text>
                    </Stack>

                    <Stack direction='row' justify='between' ph={20}>
                        <Text>Correct Answer</Text>
                        <Text>{score} / 5</Text>
                    </Stack>
 

                    <ScrollView>
                        {data?.map((item, qI) => { 
                            const yourAnswer = Object.values(allAnswer)[qI] 
                            // if(yourAnswer === item.answer) setScore(s => s + 1)
                            return(
                                <ListItem.Accordion 
                                    noIcon
                                    bottomDivider
                                    key={qI}
                                    containerStyle={{backgroundColor: 'transparent'}}
                                    content={
                                        <>
                                            <ListItem.Content>
                                                <ListItem.Title>
                                                    {qI + 1}. {`   `}
                                                    {item.question}
                                                </ListItem.Title>
                                                <ListItem.Subtitle style={{paddingLeft: 30}}>
                                                    Answer: {`  `} {item.answer}
                                                </ListItem.Subtitle>
                                                <ListItem.Subtitle style={{paddingLeft: 30, textAlign: 'justify'}}>
                                                    Solution: {item.solution}
                                                </ListItem.Subtitle>
                                            </ListItem.Content>
                                        </>
                                    }
                                    isExpanded={true} 
                                >
                                    {item.options.map(({option}, i) => {
                                        const isEqual = yourAnswer === option
                                        return (
                                            <ListItem key={i} containerStyle={{paddingLeft: 40, backgroundColor: 'transparent' }} >
                                                <ListItem.Content 
                                                    style={{
                                                        backgroundColor: isEqual ? yourAnswer === item.answer ? '#25A18E90' : '#9E2A2B70' : '', 
                                                        paddingHorizontal: 10, 
                                                        paddingVertical: 5
                                                    }}>
                                                    <ListItem.Title>
                                                        {i == 0 ? 'a.' : i == 1 ? 'b.' : 'c' }  {option}
                                                        
                                                    </ListItem.Title>
                                                </ListItem.Content>
                                            </ListItem>
                                        )
                                    })}
                                </ListItem.Accordion>
                            )
                        })} 
                    </ScrollView>  
                    <Button 
                        title="Home"
                        buttonStyle={{backgroundColor: "#004E64", height: 60}}
                        onPress={() => navigation.navigate('Home')} />
                </ImageBackground>
            </Layout>
        )
    }

    return (
        <Layout>
            <ImageBackground  
                source={require('../assets/bg1.png')} 
                imageStyle={{opacity: 0.2, objectFit: 'fill'}}
                style={{height: '100%', position: 'relative'}}
            >
                <Text h3 
                    style={{
                        alignSelf: 'center',
                        marginTop: 50,
                        fontSize: 20,
                        fontWeight: '900',
                        color: time < 4 ? "red" : "#123"
                    }}
                >
                    {time}
                </Text> 
                <Text style={{textAlign: 'center', fontSize: 30, marginTop: 10, fontWeight: '600'}}>Set {numOfSets[data[0].level - 1]}</Text>
                <ScrollView contentContainerStyle={{width : '100%', paddingVertical: 10}}> 
                    <Text 
                        style={[styles.optionTitle,
                        {
                            width: '85%',
                            textAlign: 'center',
                            alignSelf: 'center',
                            marginBottom: 30
                        }]}
                    >
                        {num + 1}. {data[num].question}
                    </Text>
                    {data[num].options.map(({option}, i) => (
                        <Pressable 
                            onPress={() => {
                                if(start) {
                                    setAnswer(option) 
                                    setTime(-1)
                                }
                            }} key={i} >
                            <View 

                                style={[
                                    styles.option,
                                    {
                                        backgroundColor: "#004E64",
                                        // borderWidth: option == answer ? 3 : 1,, 
                                        alignSelf: 'center',
                                        paddingHorizontal: 20,
                                        paddingVertical: 30, 
                                    }
                                ]}
                            >
                                <Text
                                    style={[styles.optionText,
                                        {
                                            marginRight: 10,
                                            color: '#DAD7CD'
                                        }
                                    ]}
                                >
                                    {i == 0 ? 'a' : i == 1 ? 'b' : 'c' }.
                                </Text>
                                <Text style={styles.optionText}>{option}</Text>  
                            </View>
                        </Pressable>
                    ))}

                </ScrollView>
                {!start && 
                    <Button 
                        title="Start"
                        buttonStyle={{height: 60, backgroundColor: '#004E64'}}
                        onPress={() => {
                            setStart(true)
                            setIsRunning(true)
                        }}
                    />
                }
            </ImageBackground>
        </Layout>
    )
}