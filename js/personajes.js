export class Personajes {
    constructor(nombre) {
        this.nombre = nombre
    }
    hablar(texto) {
        document.write("<p>[" + this.nombre + "]: " + texto + "</p>")
    }
    pensar(texto) {
        document.write("<p><i>[" + this.nombre + "]: " + texto + "</i></p>")
    }
    narrar(texto) {
        document.write("<p><b><i>" + texto + "</i></b></p>")
    }
}
