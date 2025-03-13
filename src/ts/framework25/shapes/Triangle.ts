import {Shape} from "./Shape";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";
import {iPosition} from "../types/iPosition";

export class Triangle extends Shape {
    // x1: number;
    // y1: number;
    // x2: number;
    // y2: number;
    // x3: number;
    // y3: number;
    width: number;
    height: number;


    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl,
                /*points: {x1: number; y1: number; x2: number; y2: number; x3: number; y3: number}*/
                position: iPosition, width: number, height: number) {
        super(ctx, color, position);
        this.width = width;
        this.height = height;
        // this.x1 = points.x1;
        // this.y1 = points.y1;
        // this.x2 = points.x2;
        // this.y2 = points.y2;
        // this.x3 = points.x3;
        // this.y3 = points.y3;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color.toString();
        // this.ctx.moveTo(this.x1, this.y1);
        // this.ctx.lineTo(this.x2, this.y2);
        // this.ctx.lineTo(this.x3, this.y3);
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.position.x + this.width / 2, this.position.y - this.height);
        this.ctx.lineTo(this.position.x - this.width / 2, this.position.y - this.height);
        this.ctx.lineTo(this.position.x, this.position.y);
        this.ctx.fill();
        this.ctx.closePath();
    }
}