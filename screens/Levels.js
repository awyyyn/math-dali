import { View, Dimensions, ImageBackground } from 'react-native'
import { Button, Skeleton, Text } from '@rneui/themed'
import Layout from './Layout'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { level1 } from './beginnersDefaultData' 
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase' 
import { numOfSets } from '../lib/helpers'
import styles from './styles'
import { Stack } from '@react-native-material/core' 


export default function Levels({route, navigation}) {

    const { category } = route.params
    const [levels, setLevels] = useState([level1]);
    const [loading, setLoading] = useState(false); 
    const [refresh, setRefresh] = useState(false);
    const seconds = category == "Beginner" ? 10 : category == "Intermediate" ? 20 : 30
  
    async function getData(refresh) {
        if(refresh){
            setRefresh(true)
        }else{
            setLoading(true)
        }
        const { data, error } = await supabase.from('category')
            .select(`*, questions( *, options(*) )`).eq('category', category) 

        if(error){
            alert(error.message)
            
            setRefresh(false)
            setLoading(false)
            return
        }

        const newSet = data?.filter(a => {
            return a?.questions.length >= 5
        })?.map(i => {
            return i.questions.filter(aa => aa.is_active == true)?.flatMap((k => {
                return {
                    id: i.id,
                    level: i.level,
                    question: k.question,
                    solution: k.solution,
                    answer: k.answer,
                    is_active: k.is_active,
                    options: k.options.filter(optionD => { 
                        return {
                            option: optionD.option
                        } 
                    })
                }
            }))
        })
 
 

        const randomized = newSet.map((item) => {
            return item.sort((a, b) => 0.5 - Math.random())
        })
 
 

        setLevels([level1, ...randomized]);
         
        if(refresh){
            setRefresh(false)
        }else{
            setLoading(false)
        }

        // const resultData = setB.filter(item => item.is_active == true) 
        
        // setLevels(level => ([...level, resultData])) 
    } 
 

    useEffect(() => {   
        
        getData('')


    }, []);
 
 
  
    return (
        <ImageBackground 
            style={[styles.bgImage]}
            source={require('../assets/bg1.png')} 
            imageStyle={{opacity: 0.3, objectFit: 'fill'}} 
        >
            {/* <ScrollView contentContainerStyle={{}}> */}
            <Text h3 style={{alignSelf: 'center', marginTop: 75, marginBottom: 20, color: "#004E64"}}>{category} Level</Text> 
            <View style={{height: Dimensions.get('window').height = '80%', alignItems: 'center', width: '100%'}}>
                <ScrollView  
                    refreshControl={
                        <RefreshControl 
                            refreshing={refresh}
                            onRefresh={() => getData('refresh')}
                        />
                    }       
                >  
                    {loading ?
                        <>
                            <Stack spacing={20} mt={7} w={Dimensions.get('window').width}> 
                                {['1', '2', '3', '4', '5'].map(i => (
                                    <Skeleton key={i} height={40} skeletonStyle={{backgroundColor: '#A3B18A'}} width={'100%'} />
                                ))}
                            </Stack>
                        </> : 

                        levels?.map((level, i) => { 
                            return (

                                <Button 
                                    key={i}
                                    containerStyle={{
                                        width: Dimensions.get('window').width = 250,
                                        backgroundColor: 'red',
                                        marginVertical: 10,
                                        display: level?.length == 5 ? 'flex' : 'none'
                                    }}
                                    buttonStyle={{backgroundColor: "#25A18E"}}
                                    onPress={() => {
                                        navigation.navigate('Quiz', {
                                            data: level,
                                            seconds
                                        })
                                    }}
                                    // title={`${i}`}
                                    title={`Set ${i == 0 ? "A" : numOfSets[levels[i - 1][0]?.level]}`}
        
                                />
                            )
                        })
                    }  
                </ScrollView>
            </View>
        </ImageBackground>  
    )
}