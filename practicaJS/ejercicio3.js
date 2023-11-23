let velocidadMax = prompt("Ingrese la velocidad maxima")
let velocidadAuto = prompt("Ingrese la velocidad del vehiculo")
let tipoAuto = prompt("Ingrese el tipo de vehiculo: PARTICULAR o AMBULANCIA")

if(tipoAuto === "PARTICULAR"){
    if(velocidadAuto < velocidadMax){
        //console.log("No pasa nada")
        document.write("No pasa nada")
    }
    else if((velocidadAuto > velocidadMax) < ((velocidadMax*15)/100)){
        //console.log("Advertencia")
        document.write("Advertencia")
    }
    else if(velocidadAuto > ((velocidadMax*15)/100)){
        //console.log("Multa")
        document.write("Multa")
    }
}
else if(tipoAuto === "AMBULANCIA"){
    let pregunta = prompt("Esta en emergencia?")
    if(pregunta === "si"){
        //cosole.log("no pasa nada, siga")
        document.write("No pasa nada, siga")
    }
    else{
        if(velocidadAuto < velocidadMax){
            //console.log("No pasa nada")
            document.write("No pasa nada")
        }
        else if((velocidadAuto > velocidadMax) < ((velocidadMax*15)/100)){
            //console.log("Advertencia")
            document.write("Advertencia")
        }
        else if(velocidadAuto > ((velocidadMax*15)/100)){
            //console.log("Multa")
            document.write("Multa")
        }
    }
}