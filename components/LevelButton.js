import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

export default function LevelButton({
    value,
    handlePress,
    color
}) {
  return (
    <Button
        title={value}
        size='lg'
        containerStyle={{width: '80%', marginVertical: 10}}
        onPress={() => handlePress(value)}
        buttonStyle={{backgroundColor: color}}
    />
  )
}