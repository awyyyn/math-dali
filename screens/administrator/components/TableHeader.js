import { View } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'
import styles from '../styles'

export default function TableHeader({
    number,
    question
}) {
    return (
        <View style={[styles.header]}>
            <Text>Problem #{number}</Text>
            <Text>{question}</Text>
        </View>
    )
}