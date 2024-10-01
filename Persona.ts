export class Persona {
    protected nombre : string;
    protected apellido : string;
    protected pasaporte : number;
    protected fechaNacimiento: Date;

    constructor(nombre:string, apellido : string, pasaporte: number, fechaNacimiento : Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setApellido(apellido:string):void{
        this.apellido = apellido;
    }

    public getPasaporte():number{
        return this.pasaporte;
    }

    public setPasaporte(pasaporte:number):void{
        this.pasaporte = pasaporte;
    }

    public getFechaNacimiento():Date{
        return this.fechaNacimiento;
    }

    public setFechaNacimiento(fechaNacimiento:Date):void{
        this.fechaNacimiento = fechaNacimiento;
    }
}