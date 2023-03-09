const socket = io()

//DOM elements
let consultorio = document.getElementById("consultorio");
let paciente = document.getElementById("paciente");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");
let horario = document.getElementById("horario")
const espacio = " ";

btn.addEventListener("click", function () {
    socket.emit("datos:captura", {
        paciente: paciente.value + espacio,
        consultorio: consultorio.value,
        horario: horario.value
    });
});


