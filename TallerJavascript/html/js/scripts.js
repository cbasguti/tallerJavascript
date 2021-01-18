var control;

function sumValues1(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    result.innerText = "El resultado de (a+b) es: \n" + (m1 + m2);
}
function subValues1(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    result.innerText = "El resultado de (a-b) es: \n" + (m1 - m2);
}
function multValues1(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    result.innerText = "El resultado de (a*b) es: \n" + (m1 * m2);
}
function divValues1(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    result.innerText = "El resultado de (a/b) es: \n" + (m1 / m2);
}
function sumValues2(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    r = (m1 + m2);
    result.innerText = "El resultado de (a/b) es: \n" + r;
    result.style.color = "#000000";
    if(checkNegative(r)){
        result.style.color = "#be1100";
    }
}
function subValues2(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    r = (m1 - m2);
    result.innerText = "El resultado de (a/b) es: \n" + r;
    result.style.color = "#000000";
    if(checkNegative(r)){
        result.style.color = "#be1100";
    }
}
function multValues2(){
    var n1, n2, result, m1, m2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    r = (m1 * m2);
    result.innerText = "El resultado de (a/b) es: \n" + r;
    result.style.color = "#000000";
    if(checkNegative(r)){
        result.style.color = "#be1100";
    }
}
function divValues2(){
    var n1, n2, result, m1, m2, r;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = document.getElementById("result");
    m1 = Number(n1);
    m2 = Number(n2);
    r = (m1 / m2);
    result.innerText = "El resultado de (a/b) es: \n" + r;
    result.style.color = "#000000";
    if(checkNegative(r)){
        result.style.color = "#be1100";
    }
}
function checkNegative(x){
    if( x < 0){
        return true;
    }
    return false;
}
function mostrarMatriz(){
    var n, m, i;
    n = document.getElementById("n").value;
    m = Number(n);
    vaciarTabla();
    for(i = 0; i < m; i++){
        var row, column, j;
        row = document.createElement("tr");
        row.id = "fila" + i;
        document.getElementById("tabla").appendChild(row);
        for(j = 0; j < m; j++){
            column = document.createElement("td");
            document.getElementById("fila" + i).appendChild(column);
            if(i == j){
                column.innerText = "1";
            }else{
                column.innerText = "0";
            }
        }
        document.createElement("br");
    } 
    document.getElementById("texto").innerText = "La matriz identidad correspondiente: ";
}

function vaciarTabla(){
    var i, rowCount;
    rowCount = document.getElementById("tabla").rows.length;
    if(rowCount != 0){
        for(i = 0; i < rowCount; i++){
            document.getElementById("tabla").deleteRow(i - (i + 1));
        }
    }
}