import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

export default function AddButton({
    value,
    handleClick
}) {
    return (
        <Button 
            onPress={handleClick}
            title={value}
            size='sm'
            buttonStyle={{paddingHorizontal: 15, paddingVertical: 7}}
        />
    )
}