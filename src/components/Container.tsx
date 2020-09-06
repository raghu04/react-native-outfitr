import React, { ReactNode } from 'react'
import { Image, Dimensions, StyleSheet, Platform } from 'react-native'
import { Box, useTheme } from './Theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constants from "expo-constants";

export const assets = [require('./assets/pattrens/1.jpg')]
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 391 / 626;
const height = width * aspectRatio;
const isIOS = Platform.OS === 'ios';

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {

    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (isIOS ? 0 : Constants.statusBarHeight)} backgroundColor="secondary">
                <Box backgroundColor="white">
                    <Box
                        borderBottomLeftRadius="xl"
                        overflow="hidden"
                        height={height * 0.60}
                    >
                        <Image
                            source={assets[0]}
                            style={{
                                width,
                                height,
                                borderBottomLeftRadius: theme.borderRadii.xl
                            }}
                        />
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">
                    <Image
                        source={assets[0]}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height,
                            top: -height * 0.60
                        }}
                    />
                    <Box
                        flex={1}
                        borderRadius="xl"
                        backgroundColor="white"
                        borderTopLeftRadius={0}
                    >
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="secondary" paddingTop="m">
                    {footer}
                    <Box height={insets.bottom} />
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    )
}

export default Container
