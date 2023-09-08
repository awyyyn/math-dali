import { Dimensions, ImageBackground, View } from 'react-native'
import { Text } from '@rneui/themed'
import React, { useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInput from './components/TextInput'
import { useState } from 'react'
import styles from './styles'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native-elements'   
import { Snackbar } from "@react-native-material/core";
import { CommonActions } from '@react-navigation/native'
import { useCallback } from 'react'
import { supabase } from '../../lib/supabase'
import { SettingsContext } from '../../context/AppContext'

export default function AddQuestion({route, navigation}) {


    const { session } = useContext(SettingsContext)
    const email = session.session.user.email
    const { category, setNumber, value, isTrue, snackBar } = route.params
    const [adding, setAdding] = useState(false);
    const [form, setForm] = useState({
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        answer: '',
        solution: ""
    })

    console.log(category, setNumber)

    const [formErr, setFormErr] = useState({
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        answer: '',
        solution: ""
    })


    const handleSubmit = async() => {
        
        if(formErr.answer || formErr.optionA || formErr.optionB || formErr.optionC || formErr.question || formErr.solution || !form.answer || !form.optionA || !form.optionB || !form.optionC || !form.question || !form.solution ){
            return false 
        }

        setAdding(true); 
        
        const { data: categoryData } = await supabase.from('category')
            .select(`*`).match({category, level: setNumber}).single()
   
        const { data, error } = await supabase.from('questions').insert({
            question: form.question,
            solution: form.solution,
            answer: form.answer,
            is_active: false,
            category: categoryData.id
        }).select().single();

        if(error){

            return console.log(error)
        }

        await supabase.from('options').insert([
            {q_id: data.id, option: form.optionA},
            {q_id: data.id, option: form.optionB},
            {q_id: data.id, option: form.optionC},
        ]);
        setAdding(false);
        navigation.navigate("SetScreen", {
            category, 
            setNumber, 
            value, 
            isTrue, 
            snackBar: "Question added successfully!"
        })
    }
 

    const handleValidation = () => {
        if(form.question == ""){
            setFormErr(formErr => ({...formErr, question: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, question: ""}))
        }

        if(form.optionA == ""){
            setFormErr(formErr => ({...formErr, optionA: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, optionA: ""}))
        }
        if(form.optionB == ""){
            setFormErr(formErr => ({...formErr, optionB: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, optionB: ""}))
        }
        if(form.optionC == ""){
            setFormErr(formErr => ({...formErr, optionC: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, optionC: ""}))
        }

        if(form.solution == ""){
            setFormErr(formErr => ({...formErr, solution: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, solution: ""}))
        }

        if(form.answer == ""){
            setFormErr(formErr => ({...formErr, answer: "Required"}))
        }else{
            setFormErr(formErr => ({...formErr, answer: ""}))
        }

    } 
 
    return ( 
        <ImageBackground 
            source={require('../../assets/bg.jpg')}
            style={{paddingHorizontal: 20, paddingVertical: 50}}
            imageStyle={{opacity: 0.1, height: Dimensions.get('screen').height}}
        > 
            <ScrollView > 
                {/* <Text h3 style={{marginBottom: 20}}>Add Question</Text>  */}

                <TextInput  
                    inputLabel="Problem"
                    isMultiline={true}
                    inputValue={form.question}
                    handleChange={(text) => {
                        setForm(f => ({...f, question: text}))
                        setFormErr(f => ({...f, question: ""}))
                    }}
                    isDisabled={adding}
                    errorMessage={formErr.question} 
                />

                <TextInput
                    inputLabel="Option A"
                    isMultiline={true}
                    isDisabled={adding}
                    inputValue={form.optionA}
                    handleChange={(text) => {
                        setForm(f => ({...f, optionA: text}))
                        setFormErr(f => ({...f, optionA: ""}))
                    }}
                    errorMessage={formErr.optionA}
                />

                <TextInput
                    inputLabel="Option B"
                    isMultiline={true}
                    isDisabled={adding}
                    inputValue={form.optionB}
                    handleChange={(text) => {
                        setForm(f => ({...f, optionB: text}))
                        setFormErr(f => ({...f, optionB: ""}))
                    }}
                    errorMessage={formErr.optionB}
                />

                <TextInput
                    inputLabel="Option C"
                    isDisabled={adding}
                    isMultiline={true}
                    inputValue={form.optionC}
                    handleChange={(text) => {
                        setForm(f => ({...f, optionC: text}))
                        setFormErr(f => ({...f, optionC: ""}))
                    }}
                    errorMessage={formErr.optionC}
                />

                <View
                    style={[styles.column,
                        {
                            marginBottom: 24,
                            marginHorizontal: 10,
                            borderColor: formErr.answer ? "#F00" : "#12312380",
                            borderBottomWidth: 2,
                            borderStyle: 'solid',
                        }
                    ]}
                >
                    <Text style={styles.inputLabel}>
                        Answer
                    </Text>
                    <Picker
                        enabled={!adding}
                        selectedValue={form.answer}
                        onValueChange={(val) => {
                            setForm(f => ({...f, answer: val}))
                            setFormErr(f => ({...f, answer: ""}))
                        }}
                        mode='dropdown'
                    >
                        <Picker.Item label='Select Answer' value="" />
                        {form.optionA != "" && 
                            <Picker.Item label='Option A' value={form.optionA ? form.optionA : ""} />
                        }
                        {form.optionB != "" && 
                            <Picker.Item label='Option B' value={form.optionB ? form.optionB : ""} /> 
                        }
                        {form.optionC != "" &&
                            <Picker.Item 
                                label='Option C' 
                                value={form.optionC ? form.optionC : ""}  
                                // enabled={form.optionC}
                            /> 
                        }
                        
                    </Picker>
                </View>

                
                <TextInput
                    isDisabled={adding}
                    inputLabel="Solution"
                    errorMessage={formErr.solution}
                    isMultiline={true}
                    inputValue={form.solution}
                    handleChange={(text) => {
                        setForm(f => ({...f, solution: text}))
                        setFormErr(f => ({...f, solution: ""}))
                    }}
                />

                <Button 
                    title="Add"
                    containerStyle={{
                        paddingHorizontal: 10
                    }}
                    buttonStyle={{backgroundColor: "#335C67"}}
                    loading={adding}
                    
                    onPress={() => { 
                        handleValidation()
                        handleSubmit() 
                    }}
                    
                />

                {/* <Button 
                    type='clear'
                    buttonStyle={{marginTop: 20}}
                    title="Back"
                /> */}
            </ScrollView> 
        </ImageBackground>  
    )
}