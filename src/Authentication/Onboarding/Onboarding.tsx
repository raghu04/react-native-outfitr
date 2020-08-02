import React, { useRef } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import Slide, { SLIDER_HEIGHT } from './Slide';
import Subslide from './Subslide';

const { width } = Dimensions.get('window');
const BORDER_SIZE = 75;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: BORDER_SIZE
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'white', 
        borderTopLeftRadius: BORDER_SIZE
    }
})

const slides = [
    { 
        title: "Relaxed", 
        subtitle: "Find Your Outfits", 
        description: "Confused about you outfit? Dont worry! Find the best outfit here!", 
        color: "#BFEAF5"
    },
    { 
        title: "Playful", 
        subtitle: "Hear it First, Wear it First", 
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas", 
        color: "#BEECC4"
    },
    { 
        title: "Excentric", 
        subtitle: "Your Style, Your Way", 
        description: "Create your individual & unique style and look amazing everyday", 
        color: "#FFE4D9"
    },
    { 
        title: "Funky", 
        subtitle: "Look Good, Feel Good", 
        description: "Discover the latest trends in fashion and explore your personality", 
        color: "#FFDDDD"
    }
]

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
    const onScroll = onScrollEvent({ x });
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
                    scrollEventThrottle={1}
                    {...{onScroll}}
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
                <Animated.View 
                    style={[styles.footerContent, { 
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }]
                    }]}
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
    )
}

export default Onboarding;