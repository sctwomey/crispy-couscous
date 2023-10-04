// Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require("./lib/shapes");

// An array of questions for user input.
inquirer
    .prompt([
        {
            type: 'input',
            name: 'svgText',
            message: 'What text would you like for your logo? [Maximum of three (3) text characters allowed].'
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
        const svg = new SVG();

        // This sets the color for the svg text and color.
        svg.setText(svgText, svgTextColor);
        svg.setColor(svgShapeColor);

        // Set the shape based on user choice and its color in the SVG
        if (svgShape === 'square') {
            const square = new Square();
            square.setColor(svgShapeColor);
            svg.setShape(square);
        } else if (svgShape === 'triangle') {
            const triangle = new Triangle();
            triangle.setColor(svgShapeColor);
            svg.setShape(triangle);
        } else {
            const circle = new Circle();
            circle.setColor(svgShapeColor);
            svg.setShape(circle);
        }

        // Write the SVG markup to a file
        fs.writeFile('logo.svg', svg.render(), function (err) {
            if (err) throw err;

            console.log('Successful SVG file generated!');
        });
    });