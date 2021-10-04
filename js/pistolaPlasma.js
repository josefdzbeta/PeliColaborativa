import { Arma } from "./armas.js";

export class PistolaPlasma extends Arma {
    constructor() {
        super()
        this.reserva = 6
    }
    disparar() {
        if(this.reserva>0){
            this.reserva--
            document.write("<p>PUUUUUUUUUUUUUUUUUUUUUUM!!!!!</p>")
        }else{
            document.write("<p>¡Pero deja que me enfríe, animal!</p>")
        }
    }
    enfriar() {
        this.reserva = 6;
        document.write("<p>[Enfriándomeee...]</p>")
    }

}