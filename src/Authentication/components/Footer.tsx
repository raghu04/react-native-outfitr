import React from 'react'
import SocialLogin from './SocialLogin'
import { Text, Box } from '../../components'
import { BorderlessButton } from 'react-native-gesture-handler'

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
}

const Footer = ({ title, action, onPress }: FooterProps) => {
    return (
        <>
            <SocialLogin />
            <Box alignItems="center" padding="m">
                <BorderlessButton  onPress={() => onPress()}>
                    <Text variant="button" color="white">
                        <Text>{`${title} `}</Text>
                        <Text color="primary">{action}</Text>
                    </Text>
                </BorderlessButton>
            </Box>
        </>
    )
}

export default Footer
