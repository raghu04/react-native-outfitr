import React from 'react'

import { Container, Button, Text, Box } from '../../components'
import SocialLogin from '../components/SocialLogin'
import TextInput from '../components/Form/TextInput';
import CheckBox from '../components/Form/CheckBox';

const emailValidator = (email: string) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems="center">
                <Button varient="transparent" onPress={() => true}>
                    <Box flexDirection="row">
                        <Text variant="button" color="white">
                            Don't have an account?
                        </Text>
                        <Text variant="button" color="primary" marginLeft="s">
                            Sign Up here
                        </Text>
                    </Box>
                </Button>
            </Box>
        </>
    )
    return (
        <Container {...{ footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Welcome back
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>
                <TextInput
                    icon="mail"
                    placeholder="Enter your Email"
                    validator={emailValidator}
                />
                <TextInput
                    icon="lock"
                    placeholder="Enter your Password"
                    validator={passwordValidator}
                />
                <Box flexDirection="row" justifyContent="space-between">
                    <CheckBox label="Remember me" />
                    <Button varient="transparent" onPress={() => true}>
                        <Text color="primary">Forgot password</Text>
                    </Button>
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button
                        varient="primary"
                        label="Log into your account"
                        onPress={() => true}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Login
