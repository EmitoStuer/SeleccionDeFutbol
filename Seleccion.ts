import {Persona} from "./Persona";
import {Futbolista} from "./Futbolista";
import { Entrenador } from "./Entrenador";
import { Masajista } from "./Masajista";

export class Seleccion {
    private entrenador : Entrenador;
    private masajista : Masajista;
    private futbolistas : Futbolista[];

    constructor (entrenador : Entrenador, masajista: Masajista, futbolistas:Futbolista[]){
        this.entrenador = entrenador;
        this.masajista = masajista;
        this.futbolistas = futbolistas;
    }

    getEntrenador():Entrenador{
        return this.entrenador;
    }

    setEntrenador(entrenador : Entrenador):void{
        this.entrenador = entrenador;
    }

    getMasajista():Masajista{
        return this.masajista;
    }

    setMasajista(masajista : Masajista):void{
        this.masajista = masajista;
    }

    getFutbolista():Futbolista[]{
        return this.futbolistas;
    }

    setFutbolista(futbolista : Futbolista[]):void{
        this.futbolistas = futbolista;
    }

    contratarJugador(futbolista : Futbolista){
        this.futbolistas.push(futbolista);
    }
}