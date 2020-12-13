import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { StackNavigationProps, Routes } from '../components/Navigation';
import { Container, Button, Text, Box, RoundedIconButton, RoundedIcon } from '../components'

const SIZE = 70;

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) => {

    return (
        <Container pattren={0} footer={
            <Box flexDirection="row" justifyContent="center">
                <RoundedIconButton 
                    name="x"
                    size={60}
                    color="secondary"
                    backgroundColor="white"
                    onPress={() => navigation.navigate("Login") } 
                />
            </Box>
        }>
            <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
                <RoundedIcon
                    name="check"
                    size={SIZE}
                    color="primary"
                    backgroundColor="primaryLight"
                />
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Your password was successfully changed
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Close this window and login again
                </Text>
                <Box>
                    <Box alignItems="center" marginTop="m">
                        <Button
                            varient="primary"
                            label="Login again"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default PasswordChanged
