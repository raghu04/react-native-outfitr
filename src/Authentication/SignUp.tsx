import React, { useRef } from 'react'
import * as Yup from 'yup';

import { Container, Box, Text, Button } from '../components'
import Footer from './components/Footer'
import { StackNavigationProps, Routes } from '../components/Navigation'
import TextInput from './components/Form/TextInput'
import { useFormik } from 'formik'

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Password don't match!")
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
    const footer = (
        <Footer
            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
        />
    )
    const passwordRef = useRef<typeof TextInput>(null);
    const passwordConfirmation = useRef<typeof TextInput>(null);
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            remember: true
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => console.log(values)
    });

    return (
        <Container {...{ footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Create account
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Let's us know what your name, email and your password
                </Text>
                <Box>
                    <TextInput
                        icon="mail"
                        placeholder="Enter your Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        autoCorrect={false}
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    <TextInput
                        ref={passwordRef}
                        icon="lock"
                        placeholder="Enter your Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => passwordConfirmation.current?.focus()}
                        secureTextEntry
                    />
                    <TextInput
                        ref={passwordConfirmation}
                        icon="lock"
                        placeholder="Confirm Password"
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box alignItems="center" marginTop="m">
                        <Button
                            varient="primary"
                            label="Create your account"
                            onPress={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp
