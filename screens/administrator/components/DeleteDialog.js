import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Dialog } from 'react-native-elements'
import styles from '../styles'
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function DeleteDialog({
    isOpen,
    handleClose, 
    id,
}) {


    const [deleting, setDeleting] = useState(false);
 
    const handleDelete = async () => {
        setDeleting(true)
        const { error } = await supabase.from('questions').delete(`*, options(*)`).eq('id', id)
        if(error){
            setDeleting(false)
            return console.log(error)
        }
        setDeleting(false) 
        handleClose();
    }


    return (
        <Dialog
            isVisible={isOpen}
            onBackdropPress={handleClose}
        >
            <Text 
                style={{
                    fontSize: Dimensions.get('window').fontScale = 20,
                    marginVertical:15
                }}
            >Are you sure to delete this question?</Text>
            <Dialog.Actions>
                <Dialog.Button 
                    title={"Delete"} 
                    titleStyle={{color: "#FFF"}}
                    buttonStyle={[
                        styles.button,
                        {
                            backgroundColor: '#ff0000', 
                        }
                    ]}   
                    loading={deleting}  
                    onPress={handleDelete}

                />
                <Dialog.Button 
                    title={"Cancel"} 
                    type='outline'
                    buttonStyle={[
                        styles.button
                    ]} 
                    onPress={handleClose}
                    // background="#ff0000"
                />
            </Dialog.Actions>
        </Dialog>
    )
}