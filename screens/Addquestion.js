import { View, Keyboard, BackHandler } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, Dialog, Input } from '@rneui/themed' 
import Layout from './Layout'
import { DialogButton } from '@rneui/base/dist/Dialog/Dialog.Button';
import { Button } from '@rneui/base';
import { supabase } from '../lib/supabase';
import { SettingsContext } from '../context/AppContext';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated'; 
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
 

const initialOffset = 10;
const iintialopacity = 0;

export default function Addquestion({navigation}) {
    

    const { session } = useContext(SettingsContext)

    const [adding, setAdding] = useState(false);
    
    const initialData = {
        category: '',
        question: '',
        choice1: '',
        choice2: '',
        choice3: '',
        level: '',
        solution: '',
        answer: '',
    }

    const [formData, setFormData] = useState(initialData);
    const [dialog, setDialog] = useState(false);
    const [answer, setAnswer] = useState(false);


    const handleCategory = (category) => {
        Keyboard.dismiss()
        setFormData((p) => ({...p, category}))
        setDialog(false);
    }

    const handleAnswer =  (answer) => {
        Keyboard.dismiss()
        setFormData((p) => ({...p, answer}))
        setAnswer(false);
    } 

    async function insertData(id) {
        const { data: questionData } = await supabase.from('questions')
            .insert({
                question: formData.question,
                answer: formData.answer,
                solution: formData.solution,
                category: id   
            }).select().single()

        console.log("QUESTIONS", questionData)

        const {data, error} = await supabase.from('options')
            .insert([
                {option: formData.choice1, q_id: questionData?.id},
                {option: formData.choice2, q_id: questionData?.id},
                {option: formData.choice3, q_id: questionData?.id},
            ]).select()
        if(error) console.log(error)
        console.log(data)
    }

    const handleSubmit = async() => { 
        setAdding(true);

        const { data: categoryData } = await supabase
            .from('category')
            .select('*, questions(*)')
            .match({category: `${formData.category}`, level: `${formData.level}`}).single();

        setAdding(false);

        // console.log(categoryData?.questions?.length)

       

        if(categoryData?.questions?.length == 5){
            display2.value = withSpring('flex')
            right2.value = withSpring(0)
            opacity2.value = withSpring(1) 

            setTimeout(() => { 
                right2.value = withSpring(150)
                opacity2.value = withSpring(0)
                display2.value = withSpring('none')
            }, 3000);
            setAdding(false)
            return
        }

        if(categoryData == null) { 
            const { data } = await supabase.from('category')
                .insert({
                    level: formData.level,
                    category: formData.category,
                    email: session?.session?.user?.email
                }).select().single();
            insertData(data.id)
            
            setAdding(false);
            display.value = withSpring('flex')
            right.value = withSpring(0)
            opacity.value = withSpring(1)
            
            setTimeout(() => { 
                opacity.value = withSpring(0) 
                right.value = withSpring(150)
                display.value =  withSpring('none')
            }, 3000);
        }else{ 
            insertData(categoryData?.id)
            
            setAdding(false);
            display.value = withSpring('flex')
            right.value = withSpring(0)
            opacity.value = withSpring(1)
            
            setTimeout(() => { 
                opacity.value = withSpring(0) 
                right.value = withSpring(150)
                display.value =  withSpring('none')
            }, 3000);
        }
        

        // if(count?.length == 5){
        //     display2.value = withSpring('flex')
        //     right2.value = withSpring(0)
        //     opacity2.value = withSpring(1) 

        //     setTimeout(() => { 
        //         right2.value = withSpring(150)
        //         opacity2.value = withSpring(0)
        //         display2.value = withSpring('none')
        //     }, 3000);
        //     setAdding(false)
        //     return
        // }


        // const { data } = await supabase
        //     .from('category')
        //     .insert({
        //         level: formData.level,
        //         category: formData.category,
        //         email: session?.session?.user?.email, 
        //     })
        //     .select().single()

        // // console.log(data.id)

        // await supabase.from('choices_tbl').insert([
        //     {/* option_num: '1', */ option: formData.choice1, question_id: data.id},
        //     {/* option_num: '2', */ option: formData.choice2, question_id: data.id},
        //     {/* option_num: '3', */ option: formData.choice3, question_id: data.id}, 
        // ]);


        // setFormData({
        //     answer: '',
        //     category: "",
        //     choice1: "",
        //     choice2: "",
        //     choice3: "",
        //     level: "",
        //     question: "",
        //     solution: ''
        // })

  
    }


    
    const right = useSharedValue(100);
    const display = useSharedValue('none')
    const opacity = useSharedValue(iintialopacity)
    const right2 = useSharedValue(100);
    const display2 = useSharedValue('none')
    const opacity2 = useSharedValue(iintialopacity)

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: right.value }],
        opacity: opacity.value,
        display: display.value
    }));

    const animatedStyles2 = useAnimatedStyle(() => ({
        transform: [{ translateX: right2.value }],
        opacity: opacity2.value,
        display: display2.value
    }));

 

    return (
        <Layout> 
            <ScrollView>
                <View style={{width: '80%', alignSelf: 'center', marginVertical: 30}}> 
                    <Input 
                        label="Category"
                        value={formData.category} 
                        // editable={} 
                        disabled={adding}
                        onPressIn={() => setDialog(true)}
                    />
                    <Input
                        label="Question"
                        multiline
                        disabled={adding}
                        value={formData.question}
                        onChangeText={(text) => setFormData(p => ({...p, question: text}))}
                    />
                    <Input
                        label="Level" 
                        value={formData.level}  
                        disabled={adding}
                        keyboardType='numeric'
                        onChangeText={(text) => setFormData(p => ({...p, level: text}))}
                    /> 
                    <Input
                        label="Option 1"
                        multiline
                        disabled={adding}
                        value={formData.choice1}
                        onChangeText={(text) => setFormData(p => ({...p, choice1: text}))} 
                    />
                    <Input
                        label="Option 2"
                        multiline
                        value={formData.choice2}
                        disabled={adding}
                        onChangeText={(text) => setFormData(p => ({...p, choice2: text}))}
                    />
                    <Input
                        label="Option 3"
                        multiline 
                        value={formData.choice3}
                        disabled={adding}
                        onChangeText={(text) => setFormData(p => ({...p, choice3: text}))}
                        
                    />
                    <Input
                        label="Answer"
                        value={formData.answer}
                        disabled={adding}
                        onPressIn={() => setAnswer(true)} 
                    /> 
                    <Input
                        label="Solution"
                        multiline 
                        value={formData.solution}
                        disabled={adding}
                        onChangeText={(text) => setFormData(p => ({...p, solution: text}))}
                    />
                    <Button 
                        title='Add'
                        color='secondary' 
                        loading={adding}
                        disabled={!formData.answer || !formData.category || !formData.choice1 || !formData.choice2 || !formData.choice3 || !formData.level || !formData.question || !formData.solution ? true : false }
                        containerStyle={{marginTop: 5}}  
                        onPress={handleSubmit}
                    />
                    <Animated.View style={[styles.success, animatedStyles]}>
                        <Text style={styles.successText}>Question added!</Text>
                    </Animated.View> 
                    <Animated.View style={[styles.error, animatedStyles2]}>
                        <Text style={styles.successText}>Level {formData.level} is added already. </Text>
                    </Animated.View> 
                </View>
            </ScrollView>

            <Dialog isVisible={dialog} onPressOut={() => setDialog(false)} >
                <Dialog.Title title='Select Category' />
                <DialogButton type='clear' size='lg' onPress={() => handleCategory('Beginner')} title="Beginner" />
                <DialogButton type='clear' size='lg' onPress={() => handleCategory('Intermediate')} title="Intermediate" />
                <DialogButton type='clear' size='lg' onPress={() => handleCategory('Expert')} title="Expert" />
            </Dialog>
            <Dialog isVisible={answer} onPressOut={() => setAnswer(false)} >
                <Dialog.Title title='Select Answer' /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer(formData.choice1)} title="Option 1" /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer(formData.choice2)} title="Option 2" /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer(formData.choice3)} title="Option 3" />  
            </Dialog>
        </Layout>
    )
}