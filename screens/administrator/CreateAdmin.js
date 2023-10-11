import { Stack, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { supabase, supabaseAdmin } from '../../lib/supabase'
import { useNavigation } from '@react-navigation/native'
import { Input, Button } from '@rneui/themed' 
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CreateAdmin() {
 
    const navigation = useNavigation()  
 
    const [editEmail, setEditEmail] = useState('')    
    const [editSchoolId, setEditSchoolId] = useState('')    
    const [editSchoolName, setEditSchoolName] = useState('');
    const [updating, setUpdating] = useState(false);
    const [newPass, setNewPass] = useState('');

    const [formErr, setFormErr] = useState({
        school_id: '',
        email: '',
        school_name: '',
    })

    const validation = () => {
        if(editSchoolId == ""){
           setFormErr(err => ({...err, school_id: 'Required School ID'}))
        }else{
            setFormErr(err => ({...err, school_id: ''}))
        }
        if(String(editSchoolId).length < 6) {
            setFormErr(err => ({...err, school_id: 'Invalid School ID'}))
        }else{
            setFormErr(err => ({...err, school_id: ''}))
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(editEmail)){
            setFormErr(err => ({...err, email: 'Invalid Email'}))
        }else{
            setFormErr(err => ({...err, email: ''}))
        }
        if(editEmail == ""){
            setFormErr(err => ({...err, email: 'Required Email'}))
        }else{
            setFormErr(err => ({...err, email: ''}))
        }
        if(editSchoolName == ""){
            setFormErr(err => ({...err, school_name: 'Required School Name'}))
        }else{
            setFormErr(err => ({...err, school_name: ''}))
        }
        if(newPass == "") {
            setFormErr(err => ({...err, password: 'Required Password'}))
        }else if(newPass < 6) {
            setFormErr(err => ({...err, password: 'Password must be 6 characters long'}))
        }else{
            setFormErr(err => ({...err, password: ''}))
        }
    }

    return (
        <SafeAreaView>
            <View
                style={{ 
                    padding: 30, 
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
            >
                <Stack spacing={50} direction='column'  minW={'100%'}>  
                    <TextInput 
                        label='Email'
                        value={editEmail}
                        onChangeText={(text) => setEditEmail(text)}
                        variant='standard'
                        color='#00667E'
                        helperText={formErr.email && formErr.email}
                    />
                    <TextInput 
                        label='School Name'
                        value={editSchoolName}
                        onChangeText={(text) => setEditSchoolName(text)}
                        variant='standard'
                        color='#00667E'
                        helperText={formErr.school_name && formErr.school_name}
                    />
                    <TextInput 
                        label='School ID'
                        color='#00667E'
                        value={editSchoolId}
                        maxLength={6}
                        // style}
                        helperText={formErr.school_id && formErr.school_id }
                        onChangeText={(text) => {
                            if(/^\d+$/.test(text) || (!text)) {
                                setEditSchoolId(text)
                            }
                        }}
                        variant='standard'
                        keyboardType='decimal-pad'
                    />
                    
                    
                    <TextInput 
                      label='Password' 
                      helperText={formErr.password && formErr.password}
                      secureTextEntry
                      color='#00667E'
                      value={newPass}
                      onChangeText={(text) => setNewPass(text)}
                      variant='standard' 
                    />

                    

                    <Button
                        onPress={async() => {
                            validation(); 

                            if(formErr.school_id || formErr.email || formErr.school_name || editSchoolId.length < 6 || !editSchoolId || !editEmail || !editSchoolName || !newPass || newPass.length < 6) {
                                console.log("ASDASDKASJLJSADKJASLDKJLKJDAKLSJDLK")
                                return
                            }
                            setUpdating(true) 

                            const { data, error } = await supabaseAdmin.createUser({
                              email: editEmail,
                              password: newPass,
                              email_confirm: true
                            })

                            if(error) {
                              alert(error.message)
                              setUpdating(false)
                              return console.log(error.message)
                            }

                            console.log("===================== ASDAS ===================")
                            console.log(data?.user)
                            console.log("===================== ASDAS ===================")

                            const { error: adminError } = await supabase.from('administrator').insert({
                              id: data?.user.id,
                              email: editEmail,
                              role: "sub_admin",
                              school_id: editSchoolId,
                              school_name: editSchoolName
                            })

                            if(adminError) {
                             
                              alert(adminError.message)
                              setUpdating(false)
                              if(data?.user?.id) await supabaseAdmin.deleteUser(data?.user?.id)
                              return console.log(adminError.message)
                            }

                            setUpdating(false);
                            navigation.navigate('subAdmin')
                            

                        }}
                        loading={updating}
                        disableElevation={updating}
                        style={{
                            backgroundColor: updating ? '#00667E80' : '#00667E' 
                        }}
                        // loadingIndicator="Updating Admin Data..."
                        title={updating ? 'Updating' : 'Update'}
                    />
                </Stack>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        width: '100%',
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        padding: 5,
        paddingHorizontal: 10,
        elevation: 3,
    }
})