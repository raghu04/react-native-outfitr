import React, { useState } from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native'
import { Box, theme } from '../../../components'
import { Feather as Icon } from '@expo/vector-icons'

interface TextInputProps extends RNTextInputProps {
    icon: string;
    validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;


const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
    const [input, setInput] = useState("");
    const [state, setState] = useState<InputState>(Pristine);
    const reColor: keyof typeof theme.colors = state === Pristine ? "text" : state === Valid ? "primary" : "danger";
    const color = theme.colors[reColor];
    const onChangeText = (text: string) => {
        setInput(text);
        if (state !== Pristine) {
            validate();
        }
    }
    const validate = () => {
        const valid = validator(input);
        setState(valid);
    }

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
                    onBlur={validate}
                    {...onChangeText}
                    {...props}
                />
            </Box>
            {(state === Valid || state === Invalid) && (
                <Box
                    height={SIZE}
                    width={SIZE}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="m"
                    backgroundColor={reColor}
                    marginRight="s"
                >
                    <Icon name={state === Valid ? "check" : "x"} color="white" size={16} />
                </Box>
            )}
        </Box>
    )
}

export default TextInput
