/**
 * Ejercicio 2: Encontrar el número más pequeño de tres números
 * Solicita 3 números al usuario y muestra cuál es el menor
 */
window.onload = function() {

    /**
     * Función para validar que la entrada sea un número válido
     * @param {string} msg - Mensaje a mostrar en el prompt
     * @returns {number} - Número válido introducido por el usuario
     */
    function getValidNumber(msg){
        let num = prompt(msg)
        // Repetir hasta que se introduzca un número válido (no vacío, no null y numérico)
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num
    }

    // Solicitar los tres números al usuario
    let num1 = getValidNumber("Hola, te vamos a pedir 3 numeros y te vamos a decir cual es el menor. Por favor, ¿Podrías darnos el primero?");
    let num2 = getValidNumber("Gracias, ahora un segundo numero...");
    let num3 = getValidNumber("Gracias, ahora un tercer numero...");

    // Mostrar el número más pequeño usando Math.min()
    window.alert("El numero más pequeño es: " + Math.min(num1, num2, num3))
}