
var conteoMaximo = 100
var conteoActual = 1

while (conteoActual <= conteoMaximo) {

    if ( (conteoActual % 3 == 0) && (conteoActual % 5 == 0) ) {

        console.log("FizzBuzz");
        
    } else if (conteoActual % 3 == 0) {

        console.log("Fizz");
        
    } else if (conteoActual % 5 == 0) {

        console.log("Buzz");
        
    } else {

        console.log(conteoActual); 

    }   conteoActual ++;    

}

console.log("Eso es todo amigos! ..El conteo ha finalizado") 