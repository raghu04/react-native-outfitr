import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { Theme } from './Theme'

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
    const theme = useTheme<Theme>();
    const backgroundColor = varient === 'primary' ? theme.colors.primary : theme.colors.buttonBG;
    const color = varient === 'primary' ? theme.colors.white : theme.colors.title;
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
