import React, { useRef } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Animated, { multiply, divide } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slide, { SLIDER_HEIGHT, BORDER_RADIUS } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1, 
        backgroundColor: 'white', 
        borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const slides = [
    { 
        title: "Relaxed", 
        subtitle: "Find Your Outfits", 
        description: "Confused about you outfit? Dont worry! Find the best outfit here!", 
        color: "#BFEAF5",
        picture: {
            src: require('../../../assets/1.png'),
            width: 2513,
            height: 3583
        }
    },
    { 
        title: "Playful", 
        subtitle: "Hear it First, Wear it First", 
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas", 
        color: "#BEECC4",
        picture: {
            src: require('../../../assets/2.png'),
            width: 2791,
            height: 3744
        }
    },
    { 
        title: "Excentric", 
        subtitle: "Your Style, Your Way", 
        description: "Create your individual & unique style and look amazing everyday", 
        color: "#FFE4D9",
        picture: {
            src: require('../../../assets/3.png'),
            width: 2738,
            height: 3244
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
            height: 2551
        }
    }
]

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal 
                    bounces={false}
                    snapToInterval={width} 
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
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
                        {slides.map(({ subtitle, description }, index) => (
                            <Subslide 
                                key={index} 
                                onPress={() => {
                                    if(scroll.current) {
                                        scroll.current
                                            .getNode()
                                            .scrollTo({ x: width * (index + 1), animated: true })
                                    }
                                }}
                                last={index === slides.length - 1} 
                                {...{ subtitle, description }} 
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default Onboarding;