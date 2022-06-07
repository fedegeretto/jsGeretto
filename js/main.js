
// Bucle While - Mientras la Edad sea Menor a 18 aparece el cartel "Sos menor", caso contrario, cuando la Edad es Mayor a 18 finaliza el bucle, y procede la Funcion Convertir

while (true) {
    let edad = parseInt(prompt("Ingresa tu edad"))
    if (edad < 18){
        alert("Sos menor, no podes ingresar al convertidor de criptomonedas")
    } else {
        break
    }
    
}

// Creación de Funcion Convertir para transformar los dólares en bitcoin, ethereum o bnb
function convertir(){

    // Ingreso de la cantidad de dolar en el formulario
    let cantidadDolar = parseInt(document.getElementById("cantidadDolar").value);

    // Creación de la variable resultado en 0
    let resultado = 0;

    // Creación de las 3 Criptomonedas principales
    let bitcoin = 29533.95;
    let ethereum = 1753.50;
    let bnb = 281.01;


    // Bucle condicional que va determinando cual elemetno esta seleccionado para realizar la operacion resultado y devuelva la alerta.
    if (document.getElementById("uno").checked){
        resultado = cantidadDolar / bitcoin;
        alert("Si conviertes " + cantidadDolar + " dólares, obtendrás " + resultado.toFixed(5) + " Bitcoin")
    } else if (document.getElementById("dos").checked){
        resultado = cantidadDolar / ethereum;
        alert("Si conviertes " + cantidadDolar + " dólares, obtendrás " + resultado.toFixed(5) + " Ethereum")
    } else if (document.getElementById("tres").checked){
        resultado = cantidadDolar / bnb;
        alert("Si conviertes " + cantidadDolar + " dólares, obtendrás " + resultado.toFixed(5) + " BNB")
    } else{
        alert("Selecciona una criptomoneda para convertir sus dólares")
    }
}

