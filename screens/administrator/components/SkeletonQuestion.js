import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'
import styles from '../styles'

export default function SkeletonQuestion() {
    return (
        <View style={[styles.column, { gap: 30 }]}>
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <Skeleton height={50} width={'40%'} />
                <Skeleton height={50} width={'40%'} />
            </View>
            {['1', '2', '3'].map((i) => (
                <View style={[styles.column, { gap: 15 }]} key={i}>
                    <View style={[styles.row, {justifyContent: 'space-between'}]}>
                        <Skeleton width={"30%"} height={30} />
                        <Skeleton width={"30%"} height={30} />
                        <Skeleton width={"30%"} height={30} />
                    </View>
                    <Skeleton height={250} />
                </View>
            ))}
        </View>
    )
}