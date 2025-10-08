window.onload = function() {
    let name = prompt("Hola, podrias decirnos tu nombre?");
    while(name === null || name.trim() === ""){
        name = prompt("Tu nombre no puede estar vacío, tu nombre?");
    }
    let age = prompt("Y tu edad?");
    while(age === null || age.trim() === ""){
        age = prompt("Enserio, necesitamos tu edad...")
    }

    window.alert("Hola " + name + ", tienes " + age + " años, eres " + (age >= 18 ? "mayor" : "menor") + " de edad.");
}