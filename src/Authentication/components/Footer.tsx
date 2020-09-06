import React from 'react'
import SocialLogin from './SocialLogin'
import { Text, Box } from '../../components'
import { TouchableWithoutFeedback } from 'react-native'

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
                <TouchableWithoutFeedback  onPress={() => onPress()}>
                    <Text variant="button" color="white">
                        <Text>{`${title} `}</Text>
                        <Text color="primary">{action}</Text>
                    </Text>
                </TouchableWithoutFeedback>
            </Box>
        </>
    )
}

export default Footer
