window.onload = function() {

    function getValidNumber(msg){
        let num = prompt(msg);
        while(num === null || num.trim() === "" || isNaN(num)){
            num = prompt("Por favor, debe ser un numero valido");
        }
        return num;
    }
    function tableGenerator(number, father){
        for(i=1; i<=number; i++){
            let tableDiv = document.createElement("div");
            tableDiv.className = "tableDiv";
            let table = document.createElement("table");
            for(j=1; j<=10; j++){
                let row = document.createElement("tr");
                row.className = "row";
                row.innerHTML ="<td>" + i + " x " + j + " = " + i*j + "</td>";
                if(j<10){
                    row.lastElementChild.style.borderBottom = "1px solid  rgba(24, 119, 207, 0.295)";
                }
                table.append(row);
            }
            tableDiv.append(table);
            father.append(tableDiv);
        }
    }

    let num= parseInt(getValidNumber("Danos un numero, te generaremos las tablas de multiplicar que contengan los numeros del 1 hasta el"));
    let tableContainer = document.getElementById("tablas");
    tableGenerator(num, tableContainer);
}