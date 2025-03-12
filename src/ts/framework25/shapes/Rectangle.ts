import {Shape} from "./Shape";
import {iPosition} from "../types/iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export class Rectangle extends Shape {
    width: number;
    height: number;
    rotation: number;

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, width: number, height: number, color: Rgba | Hsl, rotation: number = 0) {
        super(ctx, color, position);
        this.width = width;
        this.height = height;
        this.rotation = rotation;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.fillStyle = this.color.toString();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.rotation);
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
        this.ctx.closePath();
        this.ctx.restore();
    }
}