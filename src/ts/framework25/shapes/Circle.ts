import {Shape} from "./Shape";
import {iPosition} from "../types/iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Circle extends Shape {
    radius: number;

    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl, position: iPosition, radius: number) {
        super(ctx, color, position);
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill();
        this.ctx.closePath();
    }
}