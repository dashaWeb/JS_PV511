


class RootFigure {
    #name;
    constructor(width, height, bg_color, color = "black") {
        this.width = width;
        this.height = height;
        this.bg_color = bg_color;
        this.color = color;
        this.style = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg_color}; color:${this.color};`;
        this.set("")
    }
    set(value) {
        this.#name = value.trim().length < 1 ? "Figure" : value.trim();
    }
    create() {
        document.write(`<div id = "${this.#name}" style = "${this.style}">${this.#name}</div>`);
    }
    getColor() {
        return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }
    generateColor() {
        document.getElementById(`${this.#name}`).style.backgroundColor = this.getColor();
    }
}

class Square extends RootFigure {
    constructor(side, bg_color, color = "black") {
        super(side, side, bg_color, color);
    }
}

class Circle extends Square {
    constructor(radius, bg_color, color = "black") {
        super(radius * 2, bg_color, color);
        this.style += "border-radius:50%";
    }
}


let root = new RootFigure(300, 200, "red");
root.create();

let square = new Square(200, "orange");
square.set("Square")
square.create();

let circle = new Circle(200, "purple", "white");
circle.set("circle")
circle.create();

// circle.generateColor();

// setTimeout(()=>{
//     circle.generateColor()
// }, 2000)

let interval = setInterval(() => {
    circle.generateColor()
}, 1000);


setTimeout(()=>{
    clearInterval(interval)
},5000)