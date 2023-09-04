import { View, Text } from 'react-native'
import React from 'react'
import { Dialog } from 'react-native-elements'
import { Input } from '@rneui/themed'
import { useState } from 'react'
import { useEffect } from 'react'

export default function EditDialog({
    isOpen,
    question,
    handleClose
}) {

    const [editData, setEditData] = useState({
        id: "",
        question: "",
        solution: "",
        answer: "",
        is_active: "",
    })

    useEffect(() => {
        setEditData({
            id: question.id,
            question: question.question,
            solution: question.solution,
            answer: question.answer,
            is_active: question.is_active,
        })
    }, [question])

    return (
        <Dialog isVisible={isOpen} onBackdropPress={handleClose}>
            <Dialog.Title title='Edit' />
            <Input 
                value={editData.question}
            />

        </Dialog>
    )
}