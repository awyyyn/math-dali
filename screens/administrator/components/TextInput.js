import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@rneui/themed'
import styles from '../styles'

export default function TextInput({
    isDisabled = false,
    inputValue,
    handleChange,
    inputLabel,
    isPassword = false,
    isMultiline = false,
    placeholder,
    errorMessage,
    handleFocusChange
}) {
    return (
        <Input
            cursorColor="#000"
            multiline={isMultiline}
            label={inputLabel}
            value={inputValue}
            labelStyle={styles.inputLabel}
            onChangeText={(text) => handleChange(text)}
            disabled={isDisabled}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            errorMessage={errorMessage && errorMessage}
            errorStyle={errorMessage && {
                marginBottom: 20
            }}
            inputContainerStyle={{
                // borderWidth: 3
                borderColor: errorMessage ? "#F00" : "#12312380",
                borderBottomWidth: 2,
                // borderColor: "#123123"
            }}  
            
        />
    )
}