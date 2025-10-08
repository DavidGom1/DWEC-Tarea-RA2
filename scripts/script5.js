/**
 * Ejercicio 5: Generar tablas de multiplicar del 1 hasta N
 * Solicita un número y genera dinámicamente las tablas de multiplicar del 1 hasta ese número
 * Cada tabla muestra las multiplicaciones del 1 al 10
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
     * Función que genera tablas de multiplicar y las añade al DOM
     * @param {number} number - Número de tablas a generar (del 1 hasta number)
     * @param {HTMLElement} father - Elemento padre donde se insertarán las tablas
     */
    function tableGenerator(number, father){
        // Generar una tabla para cada número del 1 hasta number
        for(let i=1; i<=number; i++){
            // Crear contenedor para cada tabla
            let tableDiv = document.createElement("div");
            tableDiv.className = "tableDiv";
            let table = document.createElement("table");
            
            // Generar 10 filas (del 1 al 10) para cada tabla
            for(let j=1; j<=10; j++){
                let row = document.createElement("tr");
                row.className = "row";
                // Mostrar la multiplicación: número x índice = resultado
                row.innerHTML ="<td>" + i + " x " + j + " = " + i*j + "</td>";
                // Agregar borde inferior a todas las filas excepto la última
                if(j<10){
                    row.lastElementChild.style.borderBottom = "1px solid  rgba(24, 119, 207, 0.295)";
                }
                table.append(row);
            }
            tableDiv.append(table);
            father.append(tableDiv);
        }
    }

    // Solicitar el número límite de tablas a generar
    let num= parseInt(getValidNumber("Danos un numero, te generaremos las tablas de multiplicar que contengan los numeros del 1 hasta el"));
    // Obtener el contenedor donde se mostrarán las tablas
    let tableContainer = document.getElementById("tablas");
    // Generar las tablas dinámicamente
    tableGenerator(num, tableContainer);
}