// This is the parent class for the shapes.
class svgShape {
    constructor() {
        this.svgShapeColor = "";
    };
    setColor(color) {
        this.svgShapeColor = color;
    };
};

// This is the class for the SVG square shape.
class Square extends svgShape {
    // super(color) {
    //     this.shapeColor = color;
    // };
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.svgShapeColor}" />`
    };
};

// This is the class for the SVG circle shape.
class Circle extends svgShape {
    // super(color) {
    //     this.shapeColor = color;
    // };
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.svgShapeColor}" />`
    };
};

// This is the class for the SVG triangle shape.
class Triangle extends svgShape {
    // super(color) {
    //     this.shapeColor = color;
    // };
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.svgShapeColor}" />`
    };
};

module.exports = {
    Square,
    Circle,
    Triangle
};