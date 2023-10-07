// Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const {
    Square,
    Circle,
    Triangle
} = require('./libs/shapes.js'); // Destructuring


// This class provides the structure for the SVG logo.
class RenderUserSVG {
    constructor() {
        this.svgText;
        this.svgShape;
        this.svgShapeColor;
    };

    setColor(color) {
        this.svgShapeColor = color;
    };
    setShape(shape) {
        this.svgShape = shape.render();
    };
    setTextSquare(text, color) {
        this.svgText = `<text x="50%" y="50%" font-size="55" text-anchor="middle" dominant-baseline="middle" fill="${color}">${text}</text>`
    };
    setTextCircle(text, color) {
        this.svgText = `<text x="50%" y="50%" font-size="55" text-anchor="middle" dominant-baseline="central" fill="${color}">${text}</text>`
    };
    setTextTriangle(text, color) {
        this.svgText = `<text x="150" y="126" font-size="55" text-anchor="middle" dominant-baseline="middle" fill="${color}">${text}</text>`
    };

    render() {
        return `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`;
    };

};

// An array of questions for user input.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What upper and/or lowercase text would you like for your logo? [Maximum of 3 text characters]:',
            name: 'svgText',
            validate: textValidation
        },
        {
            type: 'input',
            message: 'What color would you like for your text characters? [Required]:',
            name: 'svgTextColor',
            validate: inputValidation
        },
        {
            type: 'list',
            message: 'What shape would you like for your logo? [Required]:',
            name: 'svgShape',
            choices: [
                'square',
                'circle',
                'triangle'
            ],
        },
        {
            type: 'input',
            message: 'What backgournd color would you like for your logo? [Required]:',
            name: 'svgShapeColor',
            validate: inputValidation
        }
    ])
    .then(function ({ svgText, svgTextColor, svgShape, svgShapeColor }) {

        const userSvg = new RenderUserSVG();
        const userSquare = new Square();
        const userCircle = new Circle();
        const userTriangle = new Triangle();

        if (svgShape === 'square') {

            userSquare.setColor(svgShapeColor);
            userSvg.setShape(userSquare);
            userSvg.setTextSquare(svgText, svgTextColor);

        } else if (svgShape === 'circle') {

            userCircle.setColor(svgShapeColor);
            userSvg.setShape(userCircle);
            userSvg.setTextCircle(svgText, svgTextColor);

        } else {

            userTriangle.setColor(svgShapeColor);
            userSvg.setShape(userTriangle);
            userSvg.setTextTriangle(svgText, svgTextColor);

        };

        fs.writeFile(`./examples/${svgShape}-logo.svg`, userSvg.render(), function (error) {
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

module.exports = RenderUserSVG;