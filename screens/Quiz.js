import { View, Text, Pressable, Dimensions, ImageBackground, TouchableHighlight } from 'react-native'
// import React from 'react'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { useState, useEffect, useCallback } from 'react'
import { Button, ButtonGroup, Input, ListItem } from '@rneui/themed'
import styles from './styles'
import { Stack } from '@react-native-material/core'
import { BlurView } from 'expo-blur';
import { numOfSets } from '../lib/helpers'
import { Icon, LinearProgress } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { LinearGradient } from 'expo-linear-gradient';
import { CountdownCircleTimer, useCountdown } from 'react-native-countdown-circle-timer';


export default function Quiz({route, navigation}) {
 
    const { data, seconds } = route.params
    const [time, setTime] = useState(seconds); 
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
    const [score, setScore] = useState(0);

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
        
        setTime(seconds);
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
            }, 1100) 
        }else{
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [start, isRunning])
 
 

    if(!start) return (
        <Layout>
            <ImageBackground 
                imageStyle={{opacity: 0.2, objectFit: 'fill'}} 
                source={require("../assets/bg1.png")} 
                style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 30
                }}
            > 
                <Text style={{fontSize: 30, textAlign: 'center', fontWeight: '600', paddingHorizontal: 20}}>You only have {seconds} seconds to answer each problem.</Text> 
                
                <Button buttonStyle={{height: 100, borderRadius: 999, width: 100}} onPress={() => { 
                    setStart(true)
                    setIsRunning(true) 
                }}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#00667E', 'lightblue'],
                        start: {x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },   
                    }}
                >
                    Start
                </Button> 

            </ImageBackground>
        </Layout>
    )


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

                    {/* <Stack direction='row' justify='between' ph={20}>
                        <Text>Equivalent Score</Text>
                        <Stack direction='row'>
                            <Text style={{color: score >= 4 ? "#25A18E90" : "#9E2A2B"}}>{score * 20} </Text>
                            <Text>/ 100</Text>
                        </Stack>
                    </Stack> */}

                    <Stack direction='row' justify='between' ph={20} mb={5}>
                        <Text>Correct Answer</Text>
                        <Stack direction='row'>
                            <Text style={{color: score >= 4 ? "#25A18E90" : "#9E2A2B"}}>{score} </Text>
                            <Text>/ 5</Text>
                        </Stack> 
                    </Stack>

                    
                    <Stack direction='row' justify='between' ph={20} mb={5}>
                        <Text>Remark</Text>
                        <Text style={{color: score >= 4 ? "#25A18E90" : "#9E2A2B"}}>{score >= 4 ? "Passed" : "Failed"}</Text>
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
                                                    {`${item.question}`}
                                                </ListItem.Title> 
                                                <ListItem.Subtitle style={{paddingLeft: 30, paddingTop: 15, textAlign: 'justify'}}>
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
                                            <ListItem key={i} containerStyle={{paddingLeft: 40, backgroundColor: 'transparent' }}>
                                                <ListItem.Content 
                                                    style={{
                                                        backgroundColor: isEqual ? yourAnswer === item.answer ? '#25A18E90' : '#9E2A2B70' : item.answer === option ? '#25A18E90' : 'transparent', 
                                                        paddingHorizontal: 10, 
                                                        paddingVertical: 5,
                                                        display: 'flex',
                                                        justifyContent: "space-between",
                                                        flexDirection: 'row'
                                                    }}>
                                                    <ListItem.Title>
                                                        {i == 0 ? 'a.' : i == 1 ? 'b.' : 'c' }  {option} 
                                                    </ListItem.Title>
                                                    {item.answer === option ?
                                                        <Icon name='check' /> :
                                                        isEqual && yourAnswer !== item.answer && 
                                                        <Icon name="close" />
                                                    }
                                                </ListItem.Content>
                                            </ListItem>
                                        )
                                    })}
                                </ListItem.Accordion>
                            )
                        })} 
                    </ScrollView>  
                    <Button 
                        title="Back"
                        buttonStyle={{backgroundColor: "#004E64", height: 60}}
                        onPress={() => navigation.goBack()} />
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
                <Stack direction='row-reverse' spacing={6} justify='between' ph={40} mt={30} mb={15}>
                    <Text h3 
                        style={{
                            alignSelf: 'center',
                            // marginTop: 50,
                            fontSize: 40,
                            fontWeight: '900',
                            color: time < 4 ? "red" : time < 6 ? "#F7B801" : "#004777"
                        }}
                    >
                        {time}
                    </Text>  
                    {/* <CountdownCircleTimer
                        size={70}
                        trailStrokeWidth={2}
                        strokeLinecap='round'
                        strokeWidth={2}
                        isPlaying={start}
                        duration={time} 
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 3, 0]}
                        onComplete={() => ({shouldRepeat: true, delay: 1})}
                        initialRemainingTime={seconds}
                        // onUpdate={() => ({shouldRepeat: true})}
                        isSmoothColorTransition
                    >
                        {({ remainingTime,  elapsedTime, color}) => (
                            <Text style={{color: color, fontSize: 26, fontWeight: '900'}}>{remainingTime}</Text>
                        )    }
                    </CountdownCircleTimer> */}
                    <Text style={{fontSize: 20, marginTop: 10, fontWeight: '600'}}>Set {numOfSets[data[0].level - 1]}</Text>
                    {/* <Animated.View style={[{width: '5%', borderRadius: 4, alignSelf: "center", height: 20, backgroundColor: '#00667E'}]}>
                        <Text>Hello World</Text> 
                    </Animated.View> */}
                </Stack>
                <ScrollView contentContainerStyle={{width : '100%', paddingVertical: 10}}> 
                    <View style={{position: "relative"}}> 
                        {/* <BlurView intensity={start ? 0 : 20} style={{width: "85%", zIndex: 99, height: '100%', alignSelf: "center", position: 'absolute'}} />  */}
                        <Text 
                            style={[styles.optionTitle, 
                            {
                                color: "#000",  
                                width: '85%',
                                textAlign: 'center',
                                alignSelf: 'center',
                                marginBottom: 30
                            }]}
                        >
                            {num + 1}. {data[num].question}
                        </Text>
                    </View>
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
                                        position: 'relative',
                                        backgroundColor: "#004E64",
                                        // borderWidth: option == answer ? 3 : 1,, 
                                        alignSelf: 'center',
                                        paddingHorizontal: 20,
                                        paddingVertical: 30, 
                                    }
                                ]}
                            >
                                {/* <BlurView intensity={start ? 0 : 10} style={{width: "115%", zIndex: 99, height: '330%', alignSelf: "center", position: 'absolute'}} />  */}
                                <Text
                                    style={[styles.optionText]}
                                >
                                    {i == 0 ? 'a' : i == 1 ? 'b' : 'c' }.
                                </Text>
                                <Text style={[styles.optionText]}> {option}</Text>  
                            </View>
                        </Pressable>
                    ))}

                </ScrollView> 
            </ImageBackground>
        </Layout>
    )
}