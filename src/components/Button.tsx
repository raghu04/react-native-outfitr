import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { Theme, Text } from './Theme'

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

interface ButtonProps {
    label?: string
    varient: "primary" | "default" | "transparent";
    onPress: () => void;
    children?: ReactNode;
}

const Button = ({label, varient, onPress, children}: ButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor = 
        varient === 'primary' 
            ? theme.colors.primary 
            : varient === 'transparent'
            ? "transparent"
            : theme.colors.grey;
    const color = 
        varient === 'primary' 
            ? theme.colors.white 
            : theme.colors.text;
    return (
        <RectButton 
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            {children ? (children) : (
                <Text variant="button" style={{ color }}>{label}</Text>
            )}
        </RectButton>
    )
}

Button.defaultProps = { varient: "default" };

export default Button
