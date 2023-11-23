$(".nivel").hide()
$(".siguiente").hide()
$(".ranking").hide()

let nombre = document.getElementById('nombre');
const niveles = document.getElementById('niveles');
const pregunta = document.getElementById('consigna');
const level = document.getElementById('level')
const opc1 = document.getElementById('1');
const opc2 = document.getElementById('2');
const opc3 = document.getElementById('3');
const opc4 = document.getElementById('4');
const siguiente = document.getElementById('siguiente')
const opciones = document.querySelectorAll('.opc')
const imagen = document.getElementById('.image')

let quiz = 0;
let puntos = 0;
let correcta = 0;

const preguntas = [
    {nivel: "Nivel 1",
    Nivel: "4^2 + (3^2*√100) ¿Cuánto es?",
        opc1: "154",
        opc2: "592",
        opc3: "106", // correcta 
        opc4: "201",
        opcionCorrecta: "opc3"
    }, 

    {nivel: "Nivel 2",
    Nivel: "x = 25*5 + (9^2)/9 - 34 ¿Cuánto vale x?",
        opc1: "131",
        opc2: "100", // correcta
        opc3: "165",
        opc4: "349",
        opcionCorrecta: "opc2"
    },

    {nivel: "Nivel 3",
        Nivel: "¿Quiénes son considerados el Padre de la Computación y el Padre de la Web?",
        opc1: "Tim Berners-Lee y Alan Turing", // correcta
        opc2: "Pitágoras y Oppenheimer",
        opc3: "Ninguna es correcta",
        opc4: "Arquimedes y Aristoteles",
        opcionCorrecta: "opc1"
    },

    {nivel: "Nivel 4",
        Nivel: "¿Quiénes tuvieron una gran contribución en el campo de las matemáticas y sentaron las bases de la Geometría y la Teoría de números?",
        opc1: "Oppenheimer",
        opc2: "Pitágoras",
        opc3: "Ninguna es correcta",
        opc4: "Euclides y Tales de Mileto", // correcta
        opcionCorrecta: "opc4"
    }, 
    
    {nivel: "Nivel 5",
        Nivel: "¿Cuál es la derivada de un número?",
        opc1: "Cero", // correcta
        opc2: "Equis",
        opc3: "No existe",
        opc4: "Uno",
        opcionCorrecta: "opc1"
    }
]

const correcta1 = "106";
const correcta2 = "100";
const correcta3 = "Tim Berners-Lee y Alan Turing";
const correcta4 = "Euclides y Tales de Mileto";
const correcta5 = "Cero";
/*const respuestasCorrectas = ["Nivel 1: 106", "Nivel 2: 100", "Nivel 3: Tim Berners-Lee y Alan Turing", 
                            "Nivel 4: Euclides y Tales de Mileto", "Nivel 5: Cero"]*/

let datos; 

function verificarInicio(){
    let verificacion = true

    if(!nombre.value){
        alert("Ingrese un nombre para jugar.");
        nombre.focus();
        verificacion = false;
    }
    else{
        window.location.replace("#niveles")
        $(".inicio, .Formulario").hide()
        empezar()
    }
}

function empezar(){
    opcionesDesenmarcadas()
    $(".nivel").show()
    $(".siguiente").show()
    datos = preguntas[quiz];
    level.innerText = datos.nivel
    pregunta.innerText = datos.Nivel
    opc1.innerText = datos.opc1
    opc2.innerText = datos.opc2
    opc3.innerText = datos.opc3
    opc4.innerText = datos.opc4
}

function opcionesDesenmarcadas(){
    for(var i = 0; i < opciones.length; i++){
        opciones[i].checked = false
    }
}

function rtaSeleccionada(){
    let rta;

    for(var i = 0; i <opciones.length; i++){
        if(opciones[i].checked){
            rta = opciones[i].id;
            break;
        }
    }
    return rta;
}

siguiente.addEventListener('click', accion)

function accion(){
    
    if(rtaSeleccionada() === datos.opcionCorrecta){
        /*rtas.classList.add("opc-correcta");*/
        puntos = puntos + 10;
        correcta++;
    }else{
        if(puntos == 0){
            puntos = 0;
        }else{
            puntos = puntos - 10;
        }
    }

    quiz++;

    if(quiz < preguntas.length){
        empezar();
    }
    else{
        $(".siguiente").hide()
        niveles.innerHTML = `<p>Jugador: ${nombre.value}<br>
        Tus respuestas correctas fueron ${correcta}/${preguntas.length}<br>
        Obtuviste ${puntos} puntos<br>
        Las respuestas correctas son: <br>
        Nivel 1: ${correcta1} <br>
        Nivel 2: ${correcta2} <br>
        Nivel 3: ${correcta3} <br>
        Nivel 4: ${correcta4} <br>
        Nivel 5: ${correcta5} <br>
        Si quieres jugar de nuevo, presiona 'Volver a Inicio'</p>

        <button onclick="location.reload()" class="volverInicio">Volver a Inicio</button>`
        $(".nivel").show()
        ranking(nombre.value, puntos);
    }
}

function ranking(nombre, puntos){
    $(".ranking").show();
    let table = document.getElementById('tabla');
    let nuevafila = table.insertRow();
    let celda1 = nuevafila.insertCell(0);
    let celda2 = nuevafila.insertCell(1);
    celda1.innerHTML = nombre;
    celda2.innerHTML = puntos;
}

