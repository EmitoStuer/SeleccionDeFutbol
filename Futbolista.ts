import {Persona} from "./Persona"
export class Futbolista extends Persona {
    private camiseta : number;
    private posicion : string;
    private esCapitan : boolean;

    constructor(nombre:string, apellido:string, pasaporte:number, fechaNacimiento:Date, camiseta:number, posicion:string, esCapitan:boolean){
        super(nombre, apellido, pasaporte, fechaNacimiento);
        this.camiseta=camiseta;
        this.posicion=posicion;
        this.esCapitan= esCapitan;
    }

    public getPosicion():string{
        return this.posicion;
    }

    public setPosicion(posicion:string):void{
        this.posicion = posicion;
    }

    public getCamiseta():number{
        return this.camiseta;
    }

    public setCamiseta(camiseta:number):void{
        this.camiseta = camiseta;
    }

    public getEsCapitan():boolean{
        return this.esCapitan;
    }

    public setEsCapitan(esCapitan:boolean):void{
        this.esCapitan = esCapitan;
    }
}