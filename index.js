// Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./libs/shapes.js');

// This class provides the structure for the SVG logo.
class userSVG {
    constructor() {
        this.svgText;
        this.svgTextColor;
        this.svgShape;
        this.svgShapeColor;
    };
    setColor(color) {
        this.svgShapeColor = color;
    };
    setShape(shape) {
        this.svgShape = shape.render();
    };
    setText(text, color) {
        this.svgText = `<text x="150" y="115" font-size="55" text-anchor="middle" fill="${color}">${text}</text>`;
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`;
    };
};

// An array of questions for user input.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What upper and/or lowercase text would you like for your logo? [Max 3 text characters].',
            name: 'svgText',
            validate: textValidation
        },
        {
            type: 'input',
            message: 'What color would you like for your text characters? [Required]',
            name: 'svgTextColor',
            validate: inputValidation
        },
        {
            type: 'list',
            message: 'What shape would you like for your logo? [Required]',
            name: 'svgShape',
            choices: [
                'square',
                'circle',
                'triangle'
            ],
            default: 'square'
        },
        {
            type: 'input',
            message: 'What backgournd color would you like for your logo? [Required]',
            name: 'svgShapeColor',
            validate: inputValidation
        }
    ])
    .then(function ({ svgText, svgTextColor, svgShape, svgShapeColor }) {
        const userSvg = new userSVG();

        userSvg.setText(svgText, svgTextColor);
        userSvg.setColor(svgShapeColor);

        // Set the shape based on user choice and its color in the SVG
        if (svgShape === 'square') {
            const square = new Square();
            square.setColor(svgShapeColor);
            userSvg.setShape(square);
        } else if (svgShape === 'circle') {
            const circle = new Circle();
            circle.setColor(svgShapeColor);
            userSvg.setShape(circle);
        } else {
            const triangle = new Triangle();
            triangle.setColor(svgShapeColor);
            userSvg.setShape(triangle);
        };

        fs.writeFile('logo.svg', userSvg.render(), function (error) {
            error ? console.log(error) : console.log("SVG File Write Success!");
        });

    });

// Validation function for text characters from user input (from https://stackoverflow.com/questions/16275661/javascript-regex-matching-3-digits-and-3-letters).
function textValidation(data) {

    const textPattern = new RegExp("^[a-zA-Z]{3}$");

    if (!textPattern.test(data)) {
        return 'Please enter only three (3) text characters!';
    };
    return true;
};

// Validation for required user input that is not a url or email.
function inputValidation(data) {
    if (!data) {
        return 'Please enter the required information!';
    };
    return true;
};