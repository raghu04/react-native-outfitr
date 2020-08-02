import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        // Update font
        fontFamily: 'SFProText-Regular',
        fontSize: 15,
        textAlign: 'center'
    }
})

interface ButtonProps {
    label: string
    varient: "primary" | "default";
    onPress: () => void;
}

const Button = ({label, varient, onPress}: ButtonProps) => {
    const backgroundColor = varient === 'primary' ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
    const color = varient === 'primary' ? "white" : "#0C0D34";
    return (
        <RectButton 
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    )
}

Button.defaultProps = { varient: "default" };

export default Button
