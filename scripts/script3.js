window.onload = function() {

    function getValidNumber(msg){
        let num = prompt(msg)
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num
    }
    function getSum(number){
        let result = 0;
        for(i=1; i<=number; i++){
            result += i;
        }
        return result
    }

    let num= getValidNumber("Danos un numero y te diremos cuanto suma del 1 hasta el...")
    window.alert("La suma de los números del 1 al " + num + " es " + getSum(num))
}