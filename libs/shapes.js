// This is the parent class for the shapes.
class SVGShape {
    constructor(color) {
        this.svgShapeColor = color;
    };

    setColor(color) {
        this.svgShapeColor = color;
    };

};

// This is the square child class for the shapes.
class Square extends SVGShape {

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.svgShapeColor}" />`;
    };

};

// This is the circle child class for the shapes.
class Circle extends SVGShape {

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.svgShapeColor}" />`;
    };

};

// This is the triangle child class for the shapes.
class Triangle extends SVGShape {

    render() {
        return `<polygon points="150 18, 244 182, 56 182" fill="${this.svgShapeColor}" />`;
    };

};

module.exports = {
    Square,
    Circle,
    Triangle
};