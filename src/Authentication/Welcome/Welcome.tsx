import React from 'react'
import { Box, Text } from '../../components'
import { Image, Dimensions } from 'react-native'
import { theme, Button } from '../../components'
import { StackNavigationProps, Routes } from '../../components/Navigation';
const { width } = Dimensions.get('window');

const picture = {
    src: require('../../../assets/5.png'),
    width: 3583,
    height: 4490
}
export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Box 
                flex={1} 
                borderBottomRightRadius="xl" 
                backgroundColor="grey"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Image
                    source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box 
                    backgroundColor="grey"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box 
                    flex={1} 
                    justifyContent="space-evenly"
                    alignItems="center"
                    backgroundColor="white" 
                    borderTopLeftRadius="xl"
                    padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup for an amazing experience
                    </Text>
                    <Button 
                        varient="primary" 
                        label="Have an account? Login" 
                        onPress={() => navigation.navigate('Login') }
                    />
                    <Button 
                        label="Join us, it's Free" 
                        onPress={() => true}
                    />
                    <Button 
                        varient="transparent" 
                        label="Forgot password?" 
                        onPress={() => true}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
