import React from 'react'
import { Box, Text } from './Theme'
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

interface CloseButtonProps {
    onPress: () => void;
}
const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
    return (
        <RectButton {...{ onPress }}>
            <Box
                width={SIZE}
                height={SIZE}
                borderRadius="xl"
                marginVertical="xl"
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
            >
                <Text color="secondary">
                    <Icon name="x" size={35} />
                </Text>
            </Box>
        </RectButton>
    )
}

export default CloseButton
