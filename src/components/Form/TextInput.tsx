import React, { forwardRef } from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native'
import { Box, RoundedIcon, useTheme } from '..'
import { Feather as Icon } from '@expo/vector-icons'

interface TextInputProps extends RNTextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ({ icon, touched, error, ...props }, ref) => {
        const theme = useTheme();
        const SIZE = theme.borderRadii.m * 2.5;

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
                        {...{ ref }}
                         {...props}
                    />
                </Box>
                {touched && (
                    <RoundedIcon
                        name={!error ? "check" : "x"}
                        size={SIZE}
                        color={"white"}
                        backgroundColor={!error ? "primary" : "danger"}
                    />
                )}
            </Box>
        )
    }
);

export default TextInput
