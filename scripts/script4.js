window.onload = function() {

    function getValidNumber(msg){
        let num = prompt(msg);
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num;
    }
    function getSum(number){
        let result = 0;
        for(i=1; i<=number; i++){
            result += i;
        }
        return result;
    }

    let sum= parseInt(getValidNumber("Danos numeros, cuando lleguemos a sumar 100 te avisamos y te decimos cuantos han hecho falta, ¿Nos das el primero?"));
    let qtyNums = 1;
    while(sum<100){
        sum += parseInt(getValidNumber("Danos más!!!"));
        qtyNums++;
    }

    window.alert("Ya son más de 100 :), la cantidad total es " + sum + ", has introducito un total de " + qtyNums + " numeros");
}