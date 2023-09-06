import { View } from 'react-native'
import { Text } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Input } from '@rneui/themed'
import TextInput from './components/TextInput' 
import { Picker } from '@react-native-picker/picker'
import { supabase } from '../../lib/supabase'

export default function EditData({route, navigation}) {

    const { question: q } = route.params;

    const [saving, setSaving] = useState(false);
 

    const [form, setForm] = useState({
        id:"",
        question:"",
        solution:"",
        optionA: "",
        optionB: "",
        optionC: "",
        answer: ""
    }); 

    useEffect(() => {  
        setForm({    
            id: q.id,
            question: q.question,
            solution: q.solution,
            optionA: q.options[0].option,
            optionB: q.options[1].option,
            optionC: q.options[2].option,
            answer: q.answer
        });

    }, [])



    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{paddingVertical: 15, paddingHorizontal: 20}}>
                <Text h1>Edit Data</Text> 
                <TextInput
                    inputLabel={"Question"}
                    inputValue={form.question}
                    handleChange={(text) => setForm(f => ({...f, question: text}))}
                />
                <TextInput
                    inputLabel={"Option A"}
                    inputValue={form.optionA}
                    handleChange={(text) => setForm(f => ({...f, optionA: text}))}
                />
                <TextInput
                    inputLabel={"Option B"}
                    inputValue={form.optionB}
                    handleChange={(text) => setForm(f => ({...f, optionB: text}))}
                />
                <TextInput
                    inputLabel={"Option C"}
                    inputValue={form.optionC}
                    handleChange={(text) => setForm(f => ({...f, optionC: text}))}
                />  
                <View style={{marginBottom: 15}}>
                    <Text style={{paddingHorizontal: 10, fontSize: 16, color: '#8c8c8c', fontWeight: '900'}}>Answer</Text>
                    <Picker 
                        mode='dropdown'  
                        style={{borderWidth: 2, borderColor: '#8c8c8c', borderStyle: 'solid'}}
                        selectedValue={form.answer}
                        onValueChange={(val) => setForm(f => ({...f, answer: val}))}
                    >
                        <Picker.Item label="Answer" disabled  />
                        <Picker.Item label="Option A" value={form.optionA}  />
                        <Picker.Item label="Option B" value={form.optionB}  />
                        <Picker.Item label="Option C" value={form.optionC}  />
                    </Picker>
                </View>
                <TextInput
                    inputLabel={"Solution"}
                    inputValue={form.solution}
                    handleChange={(text) => setForm(f => ({...f, solution: text}))}
                />
                <Button
                    title="Save Changes"
                    onPress={async() => {
                        setSaving(true)
                        if(form.optionA != q.options[0].option){
                            await supabase.from('options').update({option: form.optionA}).eq('id', q.options[0].id)
                            console.log("1111111111")
                        }
                        if(form.optionB != q.options[1].option){
                            await supabase.from('options').update({option: form.optionB}).eq('id', q.options[1].id)
                            console.log("22222222222")
                        }
                        if(form.optionC != q.options[2].option){
                            await supabase.from('options').update({option: form.optionC}).eq('id', q.options[2].id)
                            console.log("3333333333")
                        }

                        await supabase.from('questions').update({
                            question: form.question,
                            solution: form.solution,
                            answer: form.answer
                        }).eq('id', q.id)
                        setSaving(false)
                        navigation.goBack()
                    }}
                    loading={saving}
                />
                <Button
                    containerStyle={{marginTop: 15}}
                    title="Cancel"
                    type='outline'
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}