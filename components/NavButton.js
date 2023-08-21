import { Pressable } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed' 

export default function NavButton({
    handlePress,
    value,
    path
}) {
    
    return ( 
        <Pressable 
            onPress={() => handlePress(`${path}`)}
        >
            {({pressed}) => (
                <Text
                    h4 
                    h4Style={{
                        fontWeight: '600', 
                        textAlign: 'center',
                        width: value.includes("Rules") ? 120 : "auto",
                        color: pressed ? '#FF0000' : 'black',
                        fontFamily: 'Belleza'
                    }}
                >
                    {value}
                </Text>
            )}
        </Pressable> 
    )
}