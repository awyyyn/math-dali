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
            title={value}
            buttonStyle={{backgroundColor: "#004E64"}}
            disabled={disabled}
            onPress={() => handleClick(setNumber, value)} 
        />
    )
}