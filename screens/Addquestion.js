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
        choice4: '',
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


    // console.log(session.session.user.email)
    // console.log(session.session.user)

    const handleSubmit = async() => { 
        setAdding(true);

        const { data } = await supabase
            .from('questions_tbl')
            .insert({
                question: formData.question, 
                level: formData.category, 
                email: session.session?.user?.email, 
                answer: formData.answer, 
                solution: formData.solution })
            .select().single()   

        // console.log(data.id)

        await supabase.from('choices_tbl').insert([
            {option_num: '1', option: formData.choice1, question_id: data.id},
            {option_num: '2', option: formData.choice2, question_id: data.id},
            {option_num: '3', option: formData.choice3, question_id: data.id},
            {option_num: '4', option: formData.choice4, question_id: data.id},
        ]) 
        setFormData({
            answer: '',
            category: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
            question: "",
            solution: ''
        })

        setAdding(false);
        right.value = withSpring(0)
        opacity.value = withSpring(1) 

        setTimeout(() => { 
            right.value = withSpring(150)
            opacity.value = withSpring(0) 
        }, 3000);
  
    }


    
    const right = useSharedValue(100);
    const opacity = useSharedValue(iintialopacity)

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: right.value }],
        opacity: opacity.value,
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
                        label="Option 4"
                        multiline 
                        value={formData.choice4}
                        disabled={adding}
                        onChangeText={(text) => setFormData(p => ({...p, choice4: text}))}
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
                        disabled={!formData.answer || !formData.category || !formData.choice1 || !formData.choice2 || !formData.choice3 || !formData.choice4 || !formData.question || !formData.solution ? true : false }
                        containerStyle={{marginTop: 5}}  
                        onPress={handleSubmit}
                    />
                    <Animated.View style={[styles.success, animatedStyles]}>
                        <Text style={styles.successText}>Question added!</Text>
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
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer('Option 1')} title="Option 1" /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer('Option 2')} title="Option 2" /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer('Option 3')} title="Option 3" /> 
                <DialogButton type='clear' size='lg' onPress={() => handleAnswer('Option 4')} title="Option 4" /> 
            </Dialog>
        </Layout>
    )
}