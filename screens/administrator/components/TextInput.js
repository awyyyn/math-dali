import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@rneui/themed'

export default function TextInput({
    isDisabled = false,
    inputValue,
    handleChange,
    inputLabel,
    isPassword = false
}) {
    return (
        <Input
            label={inputLabel}
            value={inputValue}
            labelStyle={{color: '#8c8c8c'}}
            onChangeText={(text) => handleChange(text)}
            disabled={isDisabled}
            secureTextEntry={isPassword}
        />
    )
}