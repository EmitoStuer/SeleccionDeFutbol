import {Persona} from "./Persona";

export class Masajista extends Persona{
    private especialidad : string;

    constructor(nombre:string, apellido:string, pasaporte:number, fechaNacimiento:Date, especialidad:string){
        super(nombre, apellido, pasaporte, fechaNacimiento);
        this.especialidad=especialidad;
    }

    public getEspecialidad():string{
        return this.especialidad;
    }

    public setEspecialidad(especialidad:string):void{
        this.especialidad = especialidad;
    }
}