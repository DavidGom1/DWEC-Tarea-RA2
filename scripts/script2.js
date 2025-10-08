window.onload = function() {

    function getValidNumber(msg){
        let num = prompt(msg)
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num
    }

    let num1 = getValidNumber("Hola, te vamos a pedir 3 numeros y te vamos a decir cual es el menor. Por favor, ¿Podrías darnos el primero?");
    let num2 = getValidNumber("Gracias, ahora un segundo numero...");
    let num3 = getValidNumber("Gracias, ahora un tercer numero...");
    window.alert("El numero más pequeño es: " + Math.min(num1, num2, num3))
}