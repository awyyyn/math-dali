import { Button, Stack, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { supabase, supabaseAdmin } from '../../lib/supabase'
import { useNavigation } from '@react-navigation/native'

export default function EditAdmin({route}) {

    const { email, school_id, school_name, id } = route.params
    const navigation = useNavigation()
    console.log(id)

    const [form, setForm] = useState({
        email,
        school_id,
        school_name
    })
    const [editEmail, setEditEmail] = useState(email)    
    const [editSchoolId, setEditSchoolId] = useState(school_id)    
    const [editSchoolName, setEditSchoolName] = useState(school_name);
    const [updating, setUpdating] = useState(false);
    const [newPass, setNewPass] = useState('');

    return (
        <View
            style={{ 
                padding: 30,
                flex: 1,
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
                />
                <TextInput 
                    label='School Name'
                    value={editSchoolName}
                    onChangeText={(text) => setEditSchoolName(text)}
                    variant='standard'
                    color='#00667E'
                />
                <TextInput 
                    label='School ID'
                    color='#00667E'
                    value={editSchoolId}
                    onChangeText={(text) => setEditSchoolId(text)}
                    variant='standard'
                />
                
                <TextInput 
                    label='Password'
                    helperText='Leave blank if do not want to update password'
                    secureTextEntry
                    color='#00667E'
                    value={newPass}
                    onChangeText={(text) => setNewPass(text)}
                    variant='standard'
                    
                />
                <Button 
                    onPress={async() => {
                        setUpdating(true)
                        // let userData;
                        // let userError

                        if(email != editEmail) {
                            const { data, error } = await supabaseAdmin.updateUserById(id, {
                                email: editEmail
                            }) 
                            if(error){
                                setUpdating(false);
                                alert(error.message)
                                return console.log(error.message)
                            }
                            
                            console.log("___________________________________________________ UPDATE EMAIl")
                            console.log(data)
                        }

                        if(newPass != "") {
                            const {  error: userError, data } = await supabaseAdmin.updateUserById(id, {
                                password: newPass, 
                            });
    
                            if(userError){
                                alert(userError.message)
                                setUpdating(false)
                                return console.log(userError.message)
                            }

                            console.log("___________________________________________________ UPDATE PASSWORD________________________")
                            console.log(data)
                        }

                        const { data, error } = await supabase.from('administrator').update({
                            email: editEmail,
                            school_id: editSchoolId,
                            school_name: editSchoolName
                        }).eq('id', id)

                        if(error){
                            alert(error.message)
                            setUpdating(false)
                            return console.log(error.message)
                        }
                        setUpdating(false)
                        
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
    )
}
