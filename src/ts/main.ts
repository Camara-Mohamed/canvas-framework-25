import {settings} from "./settings.js";
import {randomInt} from "./framework25/helpers/random.js";
import {Rectangle} from "./framework25/shapes/Rectangle.js";
import {Circle} from "./framework25/shapes/Circle.js";
import {Triangle} from "./framework25/shapes/Triangle.js";
import {Rgba} from "./framework25/colors/Rgba.js";
import {Rgb} from "./framework25/colors/Rgb.js";
import {Hsl} from "./framework25/colors/Hsl.js";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

ctx.fillStyle = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), Math.random()).toString();
ctx.fillRect(0, 0, canvas.width, canvas.height);


for (let i = 0; i < 20; i++) {
    const size = randomInt(settings.rectangle.size.width, settings.rectangle.size.height);
    const color: Hsl = new Hsl(randomInt(0, 360), randomInt(0, 100), randomInt(0, 100));
    // const rotation = Math.random() < 0.5 ? Math.PI / 2 : 0;
    const rotation = Math.random() * Math.PI * 2;
    const rectangle = new Rectangle(
        ctx,
        {
            x: randomInt(size, canvas.width - size),
            y: randomInt(size, canvas.height - size)
        },
        color,
        50,
        100,
        rotation);
    rectangle.draw();
}

for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max);
    const color: Rgba = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), Math.random());
    const circle = new Circle(
        ctx,
        {
            x: randomInt(radius, canvas.width - radius),
            y: randomInt(radius, canvas.height - radius)
        },
        color,
        radius);
    // circle.draw();
}

for (let i = 0; i < 10; i++) {
    const color: Rgb = new Rgb(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256));
    const size = randomInt(settings.triangle.size.width, settings.triangle.size.height);
    const triangle = new Triangle(
        ctx,
        /*{
            x1: randomInt(0, canvas.width),
            y1: randomInt(0, canvas.height),
            x2: randomInt(0, canvas.width),
            y2: randomInt(0, canvas.height),
            x3: randomInt(0, canvas.width),
            y3: randomInt(0, canvas.height)
        }*/
        {
            x: randomInt(size, canvas.width - size),
            y: randomInt(size, canvas.height - size)
        },
        color,
        size,
        size
    );
    // triangle.draw();
}