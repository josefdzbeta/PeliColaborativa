import { Arma } from "./armas.js"

export class GranadaPulso extends Arma {
    constructor() {
        super()
        this.reserva = 2
    }

    lanzar() {
        if(this.reserva>0){
            this.reserva--
            document.write("<p>KABUUM</p>")
        }else{
            document.write("<p>Que no te quedan balas, payaso")
        }
    }

    recoger(granadas) {
        this.reserva =+ granadas
    }
}