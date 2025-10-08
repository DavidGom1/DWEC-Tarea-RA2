/**
 * Ejercicio 4: Sumar números hasta alcanzar o superar 100
 * Solicita números al usuario y los suma hasta que la suma total sea >= 100
 * Muestra cuántos números se necesitaron
 */
window.onload = function() {

    /**
     * Función para validar que la entrada sea un número válido
     * @param {string} msg - Mensaje a mostrar en el prompt
     * @returns {number} - Número válido introducido por el usuario
     */
    function getValidNumber(msg){
        let num = prompt(msg);
        // Repetir hasta que se introduzca un número válido
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num;
    }
    
    /**
     * Función que calcula la suma de números del 1 hasta el número dado
     * @param {number} number - Número límite para la suma
     * @returns {number} - Suma total de 1 hasta number
     */
    function getSum(number){
        let result = 0;
        for(let i=1; i<=number; i++){
            result += i;
        }
        return result;
    }

    // Solicitar el primer número e inicializar la suma
    let sum= parseInt(getValidNumber("Danos numeros, cuando lleguemos a sumar 100 te avisamos y te decimos cuantos han hecho falta, ¿Nos das el primero?"));
    let qtyNums = 1; // Contador de números introducidos
    
    // Continuar solicitando números hasta que la suma sea >= 100
    while(sum<100){
        sum += parseInt(getValidNumber("Danos más!!!"));
        qtyNums++;
    }

    // Mostrar resultado final: suma total y cantidad de números introducidos
    window.alert("Ya son más de 100 :), la cantidad total es " + sum + ", has introducito un total de " + qtyNums + " numeros");
}