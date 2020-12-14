import React, { useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { StackNavigationProps, Routes } from '../components/Navigation';
import { Container, Button, Text, Box } from '../components'
import TextInput from '../components/Form/TextInput';
import CheckBox from '../components/Form/CheckBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { BorderlessButton } from 'react-native-gesture-handler';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
    const footer = (
        <Footer
            title="Don't have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate("SignUp")}
        />
    )
    const passwordRef = useRef<RNTextInput>(null);
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        initialValues: { email: '', password: '', remember: true },
        validationSchema: LoginSchema,
        onSubmit: (values) => console.log(values)
    });

    return (
        <Container pattren={0} {...{ footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Welcome back
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
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
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                        <CheckBox
                            label="Remember me"
                            checked={values.remember}
                            onChange={() => setFieldValue('remember', !values.remember)}
                        />
                        <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text variant="button" color="primary">Forgot password</Text>
                        </BorderlessButton>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button
                            varient="primary"
                            label="Log into your account"
                            onPress={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Login
