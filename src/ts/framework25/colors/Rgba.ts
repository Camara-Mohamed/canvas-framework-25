import {Rgb} from "./Rgb";

export class Rgba extends Rgb {

    private _alpha: number = 0;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    set alpha(value: number) {
        if (value >= 0 && value <= 1) {
            this._alpha = value;
        } else {
            this._alpha = 0;

        }
    }

    get alpha(): number {
        return this._alpha;
    }

    toString() {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }
}