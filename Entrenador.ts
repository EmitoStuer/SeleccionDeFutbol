import {Persona} from "./Persona";

export class Entrenador extends Persona{

    constructor(nombre:string, apellido:string, pasaporte:number, fechaNacimiento:Date, especialidad:string){
        super(nombre, apellido, pasaporte, fechaNacimiento);
    }
}