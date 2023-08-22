import { View, Dimensions } from 'react-native'
import { Button, Text } from '@rneui/themed'
import Layout from './Layout'
import { ScrollView } from 'react-native-gesture-handler'
import { level1 } from './ExpertDefaultData' 
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Expert({navigation}) {


    const [levels, setLevels] = useState([level1]);

    console.log(levels)

    useEffect(() => {

        async function getData() {
            const { data } = await supabase.from('category')
                .select(`*, questions(*, options(*)) `).eq('category', 'Expert')

            const data2 = data?.filter(item => {
                return item.questions.length == 5 && item.category == "Expert" 
            }).map((item, i) => {
                return item.questions?.flatMap((item2) => { 
                    return {
                        id: item.id,
                        level: item.level,
                        question: item2.question,
                        solution: item2.solution,
                        answer: item2.answer,
                        options: item2.options.filter(optionD => { 
                            return {
                                option: optionD.option
                            } 
                        })
                    } 
                })
            })
    
               console.log("DADADA", data2)
            //    console.log(levels.concat(data2))
                setLevels(d => d.concat(data2))

        //    const data3 = data2.flatMap((item, i) => {
        //         return item.questions.map((item2) => { 
        //             return {
        //                 id: item.id,
        //                 level: item.level,
        //                 question: item2.question,
        //                 solution: item2.solution,
        //                 answer: item2.answer,
        //                 options: item2.options.map(optionD => {
        //                     return {
        //                         option: optionD.option
        //                     }
        //                 })
        //             } 
        //         })
        //    })


        //     console.log(data3.length)
        //     if(data3.length > 0){
        //         setLevels(d => ([...d, data3]))
        //     }
        }

        getData()

    }, []);
  
    return (
        <Layout >
            {/* <ScrollView contentContainerStyle={{}}> */}
            <Text h3 style={{alignSelf: 'center', marginTop: 50, marginBottom: 25}}>  Expert Level</Text> 
            <View style={{height: Dimensions.get('window').height = '80%', alignItems: 'center', width: '100%'}}>
                <ScrollView contentContainerStyle={{width: 'auto'}}> 

                    {levels.map((level, i) => (

                        <Button 
                            key={i}
                            containerStyle={{
                                width: Dimensions.get('window').width = 250,
                                backgroundColor: 'red',
                                marginVertical: 10
                            }}
                            onPress={() => {
                                navigation.navigate('ExpertLevel', {
                                    data: level
                                })
                            }}
                            title={`Level ${i + 1}`}

                        />
                    ))}
                </ScrollView>
            </View>
        {/* </ScrollView> */}
        </Layout>
    )
}