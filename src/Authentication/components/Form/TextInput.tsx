import React from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native'
import { Box, useTheme } from '../../../components'
import { Feather as Icon } from '@expo/vector-icons'

interface TextInputProps extends RNTextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;

    const reColor = !touched ? "text" : (error ? "danger" : "primary");
    const color = theme.colors[reColor];
    
    return (
        <Box
            height={48}
            flexDirection="row"
            borderRadius="s"
            alignItems="center"
            borderColor={reColor}
            borderWidth={StyleSheet.hairlineWidth}
            marginBottom="m"
            padding="s"
        >
            <Box padding="s">
                <Icon name={icon} size={16} {...{ color }} />
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor={color}
                    autoCorrect={false}
                    autoCapitalize="none"
                    {...props}
                />
            </Box>
            {touched && (
                <Box
                    height={SIZE}
                    width={SIZE}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="m"
                    backgroundColor={!error ? "primary" : "danger"}
                    marginRight="s"
                >
                    <Icon name={!error ? "check" : "x"} color="white" size={16} />
                </Box>
            )}
        </Box>
    )
}

export default TextInput
