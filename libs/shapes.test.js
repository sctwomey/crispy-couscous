// This is to 'Require' the shapes classes for testing.
const { Square, Circle, Triangle } = require('./shapes.js');

// Testing a triangle shape for a green fill color.
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

// Testing a square shape for a green fill color.
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

// Testing a circle shape for a green fill color.
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