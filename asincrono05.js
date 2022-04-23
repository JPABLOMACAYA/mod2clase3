
function piedraPapelTijera() {
    var selecUsuario = document.getElementById("seleccionHumano").value;

    var numeroMaquina = Math.random ();

    if (numeroMaquina <= 0.33) {var selecMaquina = "Piedra";

    } else if (0.33 < numeroMaquina <= 0.66) {var selecMaquina = "Papel";

    } else (selecMaquina = "Tijera");

    if ( ( (selecUsuario == "Piedra") && (selecMaquina == "Tijera") ) || ( (selecUsuario == "Papel") && (selecMaquina == "Piedra")) || ( (selecUsuario == "Tijera") && (selecMaquina == "Papel") ) ) {
        return "Has GANADO " + selecUsuario + " vence a " + selecMaquina + ". ¿Te animas a jugar otra vez?"
    } else if (selecUsuario == selecMaquina) {
        return "Ha sido un empate. Tú y Gamebot han escogido " + selecUsuario + ". Jueguen la revancha!" 
    } else {return "Has PERDIDO " + selecUsuario + " es vencido(a) por " + selecMaquina + ". Inténtalo hasta ganarle a Gamebot!"}
}
