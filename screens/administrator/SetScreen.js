import { TouchableOpacity, Image, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, RefreshControl, ScrollView, Switch, } from 'react-native-gesture-handler';
import styles from './styles'
import { CommonActions } from '@react-navigation/native'
import { Dialog, Icon, Text } from '@rneui/themed';
import { useEffect, useCallback } from 'react';
import Table, { Section, StaticCell, Cell } from 'react-native-js-tableview';
import AddButton from './components/AddButton';
import { supabase } from '../../lib/supabase';
import TableHeader from './components/TableHeader';
import TableFooter from './components/TableFooter';
import DeleteDialog from './components/DeleteDialog';
import EditDialog from './components/EditDialog'; 
import SkeletonQuestion from './components/SkeletonQuestion';
import { Snackbar, Stack } from '@react-native-material/core';

export default function SetScreen({ route, navigation }) {
    const { setNumber, value, isTrue, category, snackBar } = route.params;
    const [loading, setLoading] = useState(isTrue);
    const [refresh, setRefresh] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [notif, setNotif] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
    const [activeQuestions, setActiveQuestions] = useState()
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
    const [question, setQuestion] = useState({
        id: '',
        question: '',
        solution: '',
        answer: '',
        is_active: '',
    }); 
 
 
    const handleAddQuestion = () => { 
        navigation.navigate('AddQuestion', {
            category: 'Beginner',
            setNumber, 
            value, 
            isTrue,  
            snackBar
        })
        
    }

    async function getData (){
  
        const { data, error } = await supabase
            .from('category')
            .select(`*, questions(*, options(*))`)
            .match({'level': setNumber, category: category})
            .single();  

        setQuestions(data?.questions
            .sort((a, b) => {
                const timestampA = new Date(a.created_at);
                const timestampB = new Date(b.created_at);
              
                return timestampA - timestampB;
            })
        )  

        setActiveQuestions(data.questions.filter(q => q.is_active == true).length)

        setNumberOfQuestions(data.questions.length)
 
        setLoading(false)
    }
    
    console.log("active", activeQuestions)
    const getRealTime  = useCallback(() => {
        const subscribe = supabase.channel("any")
            .on('postgres_changes', {event: '*', schema: 'public', table: 'questions'}, (payload => getData()))
            .subscribe()
            // .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'questions'}, (payload => getData()))
        return () => subscribe.unsubscribe()

    }, [])

    useEffect(() => {
        getRealTime()
    }, [])

    useEffect(() => {  

        navigation.setOptions({
          title: "Beginner " +  value, // Initial title
        });
        
        getData(); 

    }, [setNumber, value]);

    useEffect(() => {  

        setNotif(snackBar); 

        setTimeout(() => {
            setNotif(""); 
            navigation.dispatch(CommonActions.setParams({ snackBar: '' }));
        }, 3000)

    }, [snackBar])
  
    const handleRefresh = () => {
        setRefresh(true)
        getData();
        setRefresh(false)
    } 

    const handleSwitch = async(id, value) => {  

        console.log(activeQuestions, 'asd')

        if(activeQuestions < 5){
            console.log("ASD")
            if(value == true){
                setActiveQuestions(p => p - 1)
            }else{
                setActiveQuestions(p => p + 1)
            }
            setQuestions(prev => prev.map((question) => {
                if (question.id === id) {
                    return{
                        ...question,
                        is_active: !value
                        // Toggle is_active
                    }
                }else{
                    return question;
                }
              })
              .sort((a, b) => {
                  const timestampA = new Date(a.created_at);
                  const timestampB = new Date(b.created_at); 
                  return timestampA - timestampB;
              })
            );
                
            await supabase.from('questions').update({is_active: !value}).eq('id', id); 
        }else{
            console.log("MAX")
            if(value == true){ 
                setActiveQuestions(p => p - 1)
                setQuestions(prev => prev.map((question) => {
                    if (question.id === id) {
                        return{
                            ...question,
                            is_active: false
                            // Toggle is_active
                        }
                    }else{
                        return question;
                    }
                  })
                  .sort((a, b) => {
                      const timestampA = new Date(a.created_at);
                      const timestampB = new Date(b.created_at); 
                      return timestampA - timestampB;
                  })
                ); 
                await supabase.from('questions').update({is_active: !value}).eq('id', id); 
            }else{
                setNotif("You can only activate 5 questions at a time!")
                setTimeout(() => {
                    setNotif("")
                }, 3000)
            }
        }

    }

    const handleDialog = useCallback((type, q) => { 
        setQuestion({ 
            id: q.id,
            question: q.question,
            solution: q.solution,
            answer: q.answer,
            is_active: q.is_active,
        });


        if(type == 'edit'){ 
            navigation.navigate('EditData', {
                question: q,
                category
            });
        }else{
            setIsOpenDeleteDialog(true)
        }
    }, [question.id])
 
    const handleDelete = () => {
        setNotif('Question deleted successfully!')
        setTimeout(() => {
            setNotif("")
        }, 3000)
    } 

    return ( 
        <> 
            {notif &&
                <Snackbar
                    elevation={10} 
                    message={notif}
                    style={{ zIndex: 99, position: "absolute", start: 80, end: 16, top: 16, backgroundColor: '#00667E' }}
                />
            }    
                {loading ? 
                    <>
                        <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
                            <SkeletonQuestion />
                        </View>
                    </> : 
                    <>
                        <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
                            <View style={[styles.row, styles.flexCenter, styles.spaceBetween]}>
                                <Text h1>{value}</Text>
                                <AddButton value="Add Question" handleClick={handleAddQuestion} />
                            </View>   
                            <Stack direction='row' justify='between' mt={10}> 
                                <Text style={{fontSize: 20}}>Active Question</Text> 
                                <Text style={{fontSize: 20}}>{activeQuestions}/{numberOfQuestions}</Text>  
                            </Stack>
                        </View>
                        
                        <ScrollView 
                            contentContainerStyle={{
                                paddingVertical: 15,
                                paddingHorizontal: 20
                            }}
                            refreshControl={
                                <RefreshControl 
                                    refreshing={refresh}
                                    onRefresh={handleRefresh}   
                                />
                            }
                        > 
                            {!questions ? 
                                <>
                                    <Image
                                        style={{width: "100%", height: 400, marginTop: '10%'}}
                                        source={require('../../assets/no-data.png')}
                                    />
                                    {/* <Text>No Data</Text> */}
                                </> : 
                                <View>
                                    {questions?.map((question, i) => (
                                        <Table 
                                            
                                            key={question.id}
                                            style={{
                                                backgroundColor: 'transparent',
                                                marginVertical: 20
                                            }}
                                        >
                                            <Cell
                                                key={i + 5}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    marginBottom: -20,
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <View style={[styles.row, styles.flexCenter]}>
                                                    <Text>On/Off</Text>
                                                    <Switch value={question.is_active} onChange={() => handleSwitch(question.id, question.is_active)}  />  
                                                </View>
                                                <TouchableOpacity style={[styles.row, styles.flexCenter]} onPress={() => handleDialog('edit', question)}>
                                                    <Text>Edit</Text>
                                                    <Icon name='edit' color="#61C364" />
                                                    {/* <Switch  />   */}
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.row, styles.flexCenter]} onPress={() => handleDialog('delete', question)}>
                                                    <Text>Delete</Text>
                                                    <Icon name='delete' color='#FF0000' />
                                                    {/* <Switch  />   */}
                                                </TouchableOpacity>
                                            </Cell>

                                            <Section  
                                                mode='grouped'
                                                key={i+1}
                                                header={question.question}

                                                headerComponent={<TableHeader key={i+2} question={question.question} number={i + 1}  />}
                                                footerComponent={<TableFooter key={i+3} solution={question.solution} />}
                                            > 
                                                {question.options?.map(({option, id}, k) => (
                                                    <StaticCell
                                                        key={k} 
                                                        title={`${k == 0 ? 'a.' : k == 1 ? 'b.' : 'c.'} ${option}`}
                                                        accessory={`${option == question.answer ? 'checkmark' : ""}`}
                                                    /> 
                                                ))}
                                            </Section>  
                                            
                                        </Table>
                                    ))
                                    }
                                </View>  
                            } 
                        
                        </ScrollView>  
                    </>
                }
 
                {/* DIALOG */}
                <DeleteDialog
                    deleteDialog={handleDelete}
                    isOpen={isOpenDeleteDialog}
                    handleClose={() => setIsOpenDeleteDialog(false)}
                    id={question.id}
                /> 
        </>
    )
}