import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function TableFooter({
    solution
}) {
    return (
        <View style={{padding: 13}}>
            <Text>Solution: {solution}</Text>
        </View>
    )
}