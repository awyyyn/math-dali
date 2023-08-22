import { View, Text, Pressable, Dimensions } from 'react-native'
// import React from 'react'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { useState, useEffect, useCallback } from 'react'
import { Button, Input, ListItem } from '@rneui/themed'
import styles from './styles'

export default function IntermediateLevel({route, navigation}) {
 
    const { data } = route.params
    const [time, setTime] = useState(15); 
    const [start, setStart] = useState(false);
    const [allAnswer, setAllAnswer] = useState({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
    });
    const [answer, setAnswer] = useState('')
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
                    <View 
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            columnGap: 8
                        }}
                    >
                        <Text 
                            style={{ 
                                fontSize: 30,
                                color: score > 3 ? '#00FF0060' : '#FF000090' 
                            }}
                        >
                            {score}  
                        </Text>
                        
                        <Text 
                            style={{ 
                                fontSize: 30,
                                color: 'black',
                                fontWeight: '600'
                            }}
                        >
                            / 5
                        </Text>
                    </View>
                </View>


                <ScrollView>
                    {data.map((item, qI) => { 
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
                                            <ListItem.Subtitle style={{paddingLeft: 30}}>
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
                                                    backgroundColor: isEqual ? yourAnswer === item.answer ? '#00FF0060' : '#FF000050' : '', 
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
                <Button title="Home" color={'primary'} onPress={() => navigation.navigate('Home')} />
            </Layout>
        )
    }

    return (
        <Layout>
            <Text h3 
                style={{
                    alignSelf: 'center',
                    marginTop: 50,
                    fontSize: 20
                }}
            >
                {time}
            </Text>
            <ScrollView contentContainerStyle={{width : '100%', paddingVertical: 50}}> 
                <Text 
                    style={[styles.optionTitle,
                    {
                        width: '85%',
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginBottom: 30
                    }]}
                >
                    {data[num].id}. {data[num].question}
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
                                    borderWidth: option == answer ? 3 : 1,
                                    borderColor: option == answer ? '#00667E' : 'black',
                                    alignSelf: 'center',
                                    paddingHorizontal: 20,
                                    paddingVertical: 30, 
                                }
                            ]}
                        >
                            <Text
                                style={[styles.optionText,
                                    {
                                        marginRight: 10
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
                    onPress={() => {
                        setStart(true)
                        setIsRunning(true)
                    }}
                />
            }
        </Layout>
    )
}