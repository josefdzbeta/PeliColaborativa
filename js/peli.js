import { Personajes } from "./personajes.js"
import { PistolaPlasma } from "./pistolaPlasma.js"
import { CanionBrazo } from "./canionBrazo.js"
import { GranadaPulso } from "./granadaPulso.js"
class Peli {
    constructor() {
        window.onload = this.iniciar.bind(this)
    }
    iniciar() {
        let manuel = new Personajes("Manuel Pistolas")
        let malek = new Personajes("Malek Sánchez")
        let narrador = new Personajes("Narrador")
        let diana = new Personajes("Diana Mandos")
        manuel.canion = new CanionBrazo()
        manuel.granadas = new GranadaPulso()
        malek.pistola = new PistolaPlasma()
        diana.granadas = new GranadaPulso()
        diana.pistola = new PistolaPlasma()
        /////////////////////////////////////////////
        document.write('<div class="stars"></div><div class="twinkling"></div> <div class="clouds"></div><div class="title"></div>')
        document.write("<h1>Una Espaciosa Aventura Espacial en el Espacio Espacial</h1>")
        //Con esto hacemos que la película se vaya generando por partes en vez de de golpe. Así damos una mayor sensación de dinamismo y de que la película se está escribiendo en este mismo instante
        setTimeout(() => { 
            narrador.narrar("En una galaxia muy muy lejana, dos viajeros no muy avispados aterrizaron en el planeta "
            +"G56RW en una misión para exterminar a una raza parásita alienígena conocida como Pokacocha.")
            malek.hablar("¡Al fin hemos llegado! Empezaba a marearme.")
            diana.hablar("Eres bastante blando para ser un marine en una misión para exterminar alienígenas.")
            malek.hablar("Lo que tú digas, y ahora si no te importa, tengo que vomitar.")
            diana.hablar("¿Y eso en qué afecta a mi PS2 chipeada?")
            malek.hablar("[Vomita] En fin, ¿por dónde íbamos?")
            diana.hablar("El plan es el de siempre: tirar la puerta abajo y matar al alien que tienes en la pierna")
            diana.pistola.disparar()
            malek.hablar("Y cambiarme de pantalones")
        }, 1000);
        setTimeout(() => {
            narrador.narrar("Solo había un problema que tiraba por tierra los planes de nuestros amigos. "
            +"Estaban en un páramo desierto, y por lo tanto; no había ninguna maldita puerta.")
            diana.hablar("¿Y ahora dónde demonios se supone que debemos ir?. Aquí solo hay piedras y... tus restos biológicos")
            malek.hablar("Tranquila tengo un plan maestro para todo.")
        }, 2000)
        setTimeout(() => {
            narrador.narrar("Mientras hablaban, unos sutiles movimientos empezaron a sucederse entre las rocas")
            diana.hablar("Hay un problema con tus planes")
            malek.hablar("(Ignorando a Diana) Sabemos que aquí hay parásitos, ¿y qué comen los parasitos?")
            diana.hablar("¿Whiskas?")
            malek.pensar("Por cosas como esas no tenemos más tripulantes")
            malek.hablar("Comen viajeros espaciales (guiño, guiño")
            diana.hablar("Entiendo, voy a por la salsa barbacoa para que estés más apetitoso")
            manuel.hablar("¡No tan gápido, no vais a ninguna pagte!")
            malek.hablar("Illo, la manita relajá")
            malek.pensar("¿Y este pesado quién es?")
            diana.pensar("Oh no, ya está con su personalidad de estereotipo andaluz, ahora empezará a dar por saco con el flamenco otra vez.")
            malek.hablar("¡Ole ole mi arma, chiquillo, cantate argo!! ")
            manuel.hablar("Sacre bleau! ¿Se encuentga bien?")
            diana.hablar("Mira, pasando")
            diana.pistola.disparar()
            manuel.hablar("Sacre bleau! ¡Me muego! Pego no caegué solo")
            diana.hablar("Por dios mira que eres dramático, estaba apuntado a eso que tienes enganchado al cuello")
            manuel.hablar("Es mi nuevo fulagg")
            diana.hablar("¿¿Tu qué??")
            manuel.hablar("Mi fulaggg dichosa paleta sidegal")
            diana.hablar("Pues se parece bastante a un pokacocha")
            manuel.hablar("¿Un qué?")
            malek.hablar("Nah un parásito letal, que succina la sangre de su victima hasta crecer introducirse por la carotida"+
            "llegar al cerebro y poseer al individuo")
            manuel.hablar("WAAAAAA")
            manuel.canion.disparar()
            manuel.hablar("[Se muere]")
            narrador.narrar("Y donde antes había un fulag ahora no quedaba ni fulag ni cabeza")
            malek.hablar("Mira dos pájaros de un tiro. Y sin gasta'h una bala")
            diana.hablar("¡Malek, cuidado! ¡Bicho, cuello!")
            malek.hablar("[Se muere]")
        }, 3000)
        setTimeout(() => {
            narrador.narrar("Distraida por la muerte de su compañero y el malvado ese, Diana ignoró la presencia del alienígina que estaba en su pierna."+
            " Para cuando quiso darse cuenta el parásito ya había succionado toda su energía")
            diana.hablar("[Se muere]")
            narrador.narrar("Y así, murieron todos, menos los parásitos. Esos se propagaron por todo el cosmos y acabaron con todo tipo de vida orgánica a su paso")
            document.write("<h2>FIN</h2>");
            document.write("<h3>Una película por: Daniel Núñez Santiago, Genaro Salas Galindo, José Ángel Fernández Betancourt y Mario Pérez Pizarro")
        }, 4000)
    }
}
new Peli();