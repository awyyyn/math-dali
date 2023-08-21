import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

export default function CustomButton({
    title,
    handlePress
}) {

    return (
        <Button
            title={title}
            onPress={handlePress}
        />
    )
}