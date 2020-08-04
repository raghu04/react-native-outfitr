import React from 'react'
import Animated from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    asd: {
        backgroundColor: '#2CB9B0',
        width: 8,
        height: 8,
        borderRadius: 4
    }
})

interface DotProps {
    index: number;
    currentIndex: Animated.Node<number>
}

const Dot = ({ index, currentIndex }: DotProps) => {
    return (
        <Animated.View style={styles.asd}/>
    )
}

export default Dot
