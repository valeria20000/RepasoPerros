export class Perro {

    private _id: number;


    private _nombre: string;


    private _raza: string;


    private _edad: number;

    private _img: string;
   


    private _adopcion: boolean;


    constructor() {
        this._id = -1;
        this._nombre = "";
        this._raza = "";
        this._edad = 0;
        this._img = "";
        this._adopcion = false;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get raza(): string {
        return this._raza;
    }
    public set raza(value: string) {
        this._raza = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }
    public get adopcion(): boolean {
        return this._adopcion;
    }
    public set adopcion(value: boolean) {
        this._adopcion = value;
    }

}