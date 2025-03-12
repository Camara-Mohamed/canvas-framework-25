import {Rectangle} from "./framework25/shapes/Rectangle";
import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Hsl} from "./framework25/colors/Hsl";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const color: Hsl = new Hsl(randomInt(0, 360), randomInt(0, 100), randomInt(0, 100));
const rectangle = new Rectangle(
    ctx,
    {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    50,
    100,
    color,
    Math.PI / 2);

// rectangle.draw();

for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.radius.min, settings.radius.max);
    const color: Hsl = new Hsl(randomInt(0, 360), randomInt(0, 100), randomInt(0, 100));
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

