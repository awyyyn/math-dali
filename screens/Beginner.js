import { View, Dimensions, ImageBackground } from 'react-native'
import { Button, Text } from '@rneui/themed'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { level1 } from './beginnersDefaultData' 
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase' 
import { numOfSets } from '../lib/helpers'
import styles from './styles'

export default function Beginner({navigation}) {

    const [levels, setLevels] = useState([level1]);
    const [loading, setLoading] = useState(false)

 

    async function getData() {
        const { data } = await supabase.from('category')
            .select(`*, questions( *, options(*) )`).eq('category', "Beginner") 

        console.log(data); 
 

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

        console.log(newSet.map(a => a[0].level), "sad")

        setLevels(p => ([level1, ...newSet]))
 

        // const resultData = setB.filter(item => item.is_active == true) 
        
        // setLevels(level => ([...level, resultData])) 
    } 

    useEffect(() => {

        setLoading(true)

        getData()

        setLoading(false)


    }, []);
 
 
  
    return (
        <ImageBackground 
            source={require('../assets/bg1.png')} 
            style={[styles.bgImage]}
            imageStyle={{opacity: 0.3, objectFit: 'fill'}} 
        >
            {/* <ScrollView contentContainerStyle={{}}> */}
            <Text h3 style={{alignSelf: 'center', marginTop: 75, marginBottom: 20, color: "#004E64"}}>  Beginner Level</Text> 
            <View style={{height: Dimensions.get('window').height = '80%', alignItems: 'center', width: '100%'}}>
                <ScrollView  > 

                    {loading ?<></> : levels?.map((level, i) => {
                        
                        return (

                            <Button 
                                key={i}
                                containerStyle={{
                                    width: Dimensions.get('window').width = 250,
                                    backgroundColor: 'red',
                                    marginVertical: 10,
                                    display: level.length == 5 ? 'flex' : 'none'
                                }}
                                buttonStyle={{backgroundColor: "#25A18E"}}
                                onPress={() => {
                                    navigation.navigate('Level', {
                                        data: level
                                    })
                                }}
                                title={`Set ${i == 0 ? "A" : numOfSets[levels[i - 1][0].level]}`}
    
                            />
                        )
                    })}  
                </ScrollView>
            </View>
        </ImageBackground>  
    )
}