/**
 * Ejercicio 1: Solicitar nombre y edad al usuario
 * Muestra si el usuario es mayor o menor de edad (18 años)
 */
window.onload = function() {
    // Solicitar el nombre del usuario y validar que no esté vacío
    let name = prompt("Hola, podrias decirnos tu nombre?");
    while(name === null || name.trim() === ""){
        name = prompt("Tu nombre no puede estar vacío, tu nombre?");
    }

    // Solicitar la edad del usuario y validar que no esté vacía
    let age = prompt("Y tu edad?");
    while(age === null || age.trim() === ""){
        age = prompt("Enserio, necesitamos tu edad...")
    }

    // Mostrar mensaje con el nombre, edad y si es mayor o menor de edad
    window.alert("Hola " + name + ", tienes " + age + " años, eres " + (age >= 18 ? "mayor" : "menor") + " de edad.");
}