// Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./libs/shapes.js');

// This class provides the structure for the SVG logo.
class userSVG {
    constructor() {
        this.svgText = "";
        this.svgTextColor = "";
        this.svgShape = "";
        this.svgShapeColor = "";
    };
    setColor(color) {
        this.svgShapeColor = color;
    };
    setShape(shape) {
        this.svgShape = shape.render();
    };
    setText(text, color) {
        this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
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
            name: 'svgText',
            message: 'What upper and/or lowercase text would you like for your logo? [Max 3 text characters].'
        },
        {
            type: 'input',
            name: 'svgTextColor',
            message: 'What color would you like for your text characters?'
        },
        {
            type: 'list',
            name: 'svgShape',
            message: 'What shape would you like for your logo?',
            choices: [
                'square',
                'circle',
                'triangle'
            ]
        },
        {
            type: 'input',
            name: 'svgShapeColor',
            message: 'What backgournd color would you like for your logo?'
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
        } else if (svgShape === 'triangle') {
            const triangle = new Triangle();
            triangle.setColor(svgShapeColor);
            userSvg.setShape(triangle);
        } else {
            const circle = new Circle();
            circle.setColor(svgShapeColor);
            userSvg.setShape(circle);
        };

        // This is the for writing the SVG file.
        fs.writeFile('logo.svg', userSvg.render(), function (err) {
            if (err) throw err;

            console.log('Successful SVG file generated!');
        });
    });

