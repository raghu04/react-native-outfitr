import React from 'react'

import { Container, Button, Text, Box } from '../../components'
import SocialLogin from '../components/SocialLogin'
import TextInput from '../components/Form/TextInput';
import CheckBox from '../components/Form/CheckBox';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

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
                <Formik
                    initialValues={{ email: '', password: '', remember: true }}
                    validationSchema={LoginSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({ 
                        handleChange, 
                        handleBlur, 
                        handleSubmit, 
                        values,
                        errors, 
                        touched,
                        setFieldValue
                    }) => (
                        <Box>
                            <TextInput
                                icon="mail"
                                placeholder="Enter your Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <TextInput
                                icon="lock"
                                placeholder="Enter your Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={errors.password}
                                touched={touched.password}

                            />
                            <Box flexDirection="row" justifyContent="space-between">
                                <CheckBox 
                                    label="Remember me" 
                                    checked={values.remember} 
                                    onChange={() => setFieldValue('remember', !values.remember)} 
                                />
                                <Button varient="transparent" onPress={() => true}>
                                    <Text color="primary">Forgot password</Text>
                                </Button>
                            </Box>
                            <Box alignItems="center" marginTop="m">
                                <Button
                                    varient="primary"
                                    label="Log into your account"
                                    onPress={handleSubmit}
                                />
                            </Box>
                        </Box>
                    )}
                </Formik>

            </Box>
        </Container>
    )
}

export default Login
