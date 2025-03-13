import {Rectangle} from "./framework25/shapes/Rectangle";
import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Hsl} from "./framework25/colors/Hsl";
import {Triangle} from "./framework25/shapes/Triangle";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

ctx.fillStyle = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), randomInt(20, 60) / 100).toString();
ctx.fillRect(0, 0, canvas.width, canvas.height);


for (let i = 0; i < 20; i++) {
    const size = randomInt(settings.rectangle.width, settings.rectangle.height);
    const color: Rgba = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), Math.random());
    // const rotation = Math.random() < 0.5 ? Math.PI / 2 : 0;
    const rotation = Math.random() * Math.PI * 2;
    const rectangle = new Rectangle(
        ctx,
        {
            x: randomInt(size, canvas.width - size),
            y: randomInt(size, canvas.height - size)
        },
        50,
        100,
        color,
        rotation);
    // rectangle.draw();
}

for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.radius.min, settings.radius.max);
    const color: Rgba = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), Math.random());
    const circle = new Circle(
        ctx,
        color,
        {
            x: randomInt(radius, canvas.width - radius),
            y: randomInt(radius, canvas.height - radius)
        },
        radius);
    circle.draw();
}

for (let i = 0; i < 10; i++) {
    const color: Rgba = new Rgba(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), Math.random());
    const size = randomInt(settings.triangle.width, settings.triangle.height);
    const triangle = new Triangle(
        ctx,
        color,
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
        size,
        size
    );
    // triangle.draw();
}