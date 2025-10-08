/**
 * Ejercicio 3: Calcular la suma de números del 1 hasta N
 * Solicita un número y calcula la suma de todos los números desde 1 hasta ese número
 */
window.onload = function() {

    /**
     * Función para validar que la entrada sea un número válido
     * @param {string} msg - Mensaje a mostrar en el prompt
     * @returns {number} - Número válido introducido por el usuario
     */
    function getValidNumber(msg){
        let num = prompt(msg)
        // Repetir hasta que se introduzca un número válido
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num
    }
    
    /**
     * Función que calcula la suma de números del 1 hasta el número dado
     * @param {number} number - Número límite para la suma
     * @returns {number} - Suma total de 1 hasta number
     */
    function getSum(number){
        let result = 0;
        // Sumar todos los números desde 1 hasta number
        for(let i=1; i<=number; i++){
            result += i;
        }
        return result
    }

    // Solicitar el número límite al usuario
    let num= getValidNumber("Danos un numero y te diremos cuanto suma del 1 hasta el...")
    // Mostrar la suma total
    window.alert("La suma de los números del 1 al " + num + " es " + getSum(num))
}