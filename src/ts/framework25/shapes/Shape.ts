import {iPosition} from "../types/iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
    position: iPosition;
    color: Rgba | Hsl;

    constructor(ctx: CanvasRenderingContext2D, color: Rgba | Hsl, position: iPosition) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }
}