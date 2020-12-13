import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { StackNavigationProps, Routes } from '../components/Navigation';
import { Container, Button, Text, Box, CloseButton } from '../components'

const SIZE = 70;

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) => {

    return (
        <Container pattren={0} footer={
            <Box flexDirection="row" justifyContent="center">
                <CloseButton onPress={() => navigation.navigate("Login") } />
            </Box>
        }>
            <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
                <Box
                    width={SIZE}
                    height={SIZE}
                    borderRadius="xl"
                    marginVertical="xl"
                    backgroundColor="primaryLight"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text color="primary">
                        <Icon name="check" size={35} />
                    </Text>
                </Box>
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Password was successfully changed
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
