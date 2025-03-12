export class Rgba {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;

    // TODO : Validation

    get red(): number {
        return Math.trunc(this._red);
    }

    get green(): number {
        return Math.trunc(this._green);
    }

    get blue(): number {
        return Math.trunc(this._blue);
    }

    get alpha(): number {
        return this._alpha;
    }

    set red(value: number) {
        if (value >= 0 && value <= 256) {
            this._red = value;
        }
    }

    set green(value: number) {
        if (value >= 0 && value <= 256) {
            this._green = value;
        }
    }

    set blue(value: number) {
        if (value >= 0 && value <= 256) {
            this._blue = value;
        }
    }

    set alpha(value: number) {
        if (value >= 0 && value <= 1) {
            this._alpha = value;
        }
    }

    toString() {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}