import React, { useRef } from 'react'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slide, { SLIDER_HEIGHT } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import { useTheme, makeStyles } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';
import { Theme } from '../../components/Theme';

const { width } = Dimensions.get('window');

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: 'hidden',
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1, 
        backgroundColor: 'white', 
        borderTopLeftRadius: theme.borderRadii.xl
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const slides = [
    { 
        title: "Relaxed", 
        subtitle: "Find Your Outfits", 
        description: "Confused about you outfit? Dont worry! Find the best outfit here!", 
        color: "#BFEAF5",
        picture: {
            src: require('../../../assets/1.png'),
            width: 3413,
            height: 5503
        }
    },
    { 
        title: "Playful", 
        subtitle: "Hear it First, Wear it First", 
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas", 
        color: "#BEECC4",
        picture: {
            src: require('../../../assets/2.png'),
            width: 3091,
            height: 5144
        }
    },
    { 
        title: "Excentric", 
        subtitle: "Your Style, Your Way", 
        description: "Create your individual & unique style and look amazing everyday", 
        color: "#FFE4D9",
        picture: {
            src: require('../../../assets/3.png'),
            width: 4080,
            height: 6620
        }
    },
    { 
        title: "Funky", 
        subtitle: "Look Good, Feel Good", 
        description: "Discover the latest trends in fashion and explore your personality", 
        color: "#FFDDDD",
        picture: {
            src: require('../../../assets/4.png'),
            width: 1757,
            height: 2851
        }
    }
];
export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: StackNavigationProps<Routes, "Onboarding">) => {
    const styles = useStyles();
    const theme = useTheme();
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            index * width,
                            (index + 0.5) * width
                        ],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP
                    })
                    return (
                        <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                            <Image source={picture.src} style={{
                                width: width - theme.borderRadii.s,
                                height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                            }} />
                        </Animated.View> 
                    )
                })}
                
                <Animated.ScrollView
                    ref={scroll}
                    horizontal 
                    bounces={false}
                    snapToInterval={width} 
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    {...scrollHandler}
                >
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View 
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} 
                />
                <View 
                    style={[styles.footerContent]}
                >
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={divide(width, x)} {...{index}} />
                        ))}
                    </View>
                    <Animated.View 
                        style={{ 
                            flex: 1,
                            flexDirection: 'row',
                            transform: [{ translateX: multiply(x, -1) }],
                            width: width * slides.length
                        }}
                    >
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;

                            return (
                                <Subslide 
                                    key={index} 
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate('Welcome');
                                        } else {
                                            scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width * (index + 1), animated: true })
                                        }
                                    }}
                                    {...{ subtitle, description, last }} 
                                />
                            )
                        })}
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default Onboarding;