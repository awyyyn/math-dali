import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'



export default function SetButton({
    value,
    handleClick, 
    disabled = false,
    setNumber
}) {

    return (
        <Button
            title={value}w
            disabled={disabled}
            onPress={() => handleClick(setNumber, value)} 
        />
    )
}