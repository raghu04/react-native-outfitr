"use strict";
exports.__esModule = true;
exports.Box = exports.Text = void 0;
var restyle_1 = require("@shopify/restyle");
var theme = restyle_1.createTheme({
    colors: {
        primary: "#2CB9B0",
        secondary: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)",
        grey: "rgba(12, 13, 52, 0.05)",
        white: "white"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: 'SFProDisplay-Bold',
            color: 'white',
            textAlign: 'center'
        },
        title1: {
            fontSize: 28,
            fontFamily: 'SFProDisplay-Semibold',
            color: "secondary"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProDisplay-Semibold',
            color: "secondary"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'SFProDisplay-Regular',
            color: "text"
        },
        button: {
            fontSize: 15,
            fontFamily: 'SFProDisplay-Medium',
            color: "text"
        }
    },
    breakpoints: {}
});
exports.Text = restyle_1.createText();
exports.Box = restyle_1.createBox();
exports["default"] = theme;
