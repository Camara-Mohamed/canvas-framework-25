import {iPosition} from "../iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";
import {Rgb} from "../colors/Rgb";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
    position: iPosition;
    color: Rgba | Hsl | Rgb;


    protected constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl | Rgb) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }
}
