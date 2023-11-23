var numero = prompt("Ingrese un numero de 4 digitos");
var separado = numero.split("");
var invertir = separado.reverse();
var unir = invertir.join();

//console.log(newNum, typeof(newNum)) Number
//console.log(numero, typeof(numero))
/*
for(var i = numero.length - 1; i >= 0; i--){
    var num = 0;
    num += numero[i];
    return num;
}*/

document.write(unir)