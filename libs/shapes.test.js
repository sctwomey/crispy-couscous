// This is to 'Require' the shapes classes for testing.
const {
    Square,
    Circle,
    Triangle
} = require('./shapes.js');

const renderSVG = require('../index.js');


// Testing that a square shape displays and that the shape has a green fill color.
describe('Square', () => {
    describe('color', () => {
        it("should have a green fill color displayed in a square shape", () => {

            const newSquare = `<rect x="75" y="25" width="150" height="150" fill="green" />`;
            const shape = new Square();

            shape.setColor('green');
            expect(shape.render()).toEqual(newSquare);
        });
    });
});

// Testing that a circle shape displays and that the shape has a green fill color.
describe('Circle', () => {
    describe('color', () => {
        it("should have a green fill color displayed in a circle shape", () => {

            const newCircle = `<circle cx="150" cy="100" r="80" fill="green" />`;
            const shape = new Circle();

            shape.setColor('green');
            expect(shape.render()).toEqual(newCircle);
        });
    });
});

// Testing that a triangle shape displays and that the shape has a green fill color.
describe('Triangle', () => {
    describe('color', () => {
        it("should have a green fill color displayed in a triangle shape", () => {

            const newTriangle = `<polygon points="150 18, 244 182, 56 182" fill="green" />`;
            const shape = new Triangle();

            shape.setColor('green');
            expect(shape.render()).toEqual(newTriangle);
        });
    });
});

// Testing a square shape for text display and text color.
describe('Text & Text Color Display', () => {
    describe('text, text color', () => {
        it("should have text that is at least three characters and has a user chosen color", () => {

            const textString = `<text x="50%" y="50%" font-size="55" text-anchor="middle" dominant-baseline="middle" fill="green">see</text>`;
            const display = new renderSVG();

            display.setTextSquare('see', 'green');
            expect(display.svgText).toEqual(textString);
        });
    });
});

// Testing a circle shape for text display and text color.
describe('Text & Text Color Display', () => {
    describe('text, text color', () => {
        it("should have text that is at least three characters and has a user chosen color", () => {

            const textString = `<text x="50%" y="50%" font-size="55" text-anchor="middle" dominant-baseline="central" fill="green">see</text>`;
            const display = new renderSVG();

            display.setTextCircle('see', 'green');
            expect(display.svgText).toEqual(textString);
        });
    });
});

// Testing a triangle shape for text display and text color.
describe('Text & Text Color Display', () => {
    describe('text, text color', () => {

        it("should have text that is at least three characters and has a user chosen color", () => {
            const textString = `<text x="150" y="126" font-size="55" text-anchor="middle" dominant-baseline="middle" fill="green">see</text>`;
            const display = new renderSVG();

            display.setTextTriangle('see', 'green');
            expect(display.svgText).toEqual(textString);
        });
    });
});
