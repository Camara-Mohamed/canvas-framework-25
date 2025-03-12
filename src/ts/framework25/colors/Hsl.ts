export class Hsl {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;


    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    get hue(): number {
        return Math.trunc(this._hue);
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    get lightness(): number {
        return Math.trunc(this._lightness);
    }

    set hue(value: number) {
        if (value >= 0 && value <= 360) {
            this._hue = value;
        }
    }

    set saturation(value: number) {
        if (value >= 0 && value <= 100) {
            this._saturation = value;
        }
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        }
    }

    toString() {
        return `hsl(${this.hue}deg,${this.saturation}%,${this.lightness}%)`
    }
}