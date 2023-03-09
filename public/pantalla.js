
const socket = io()

let pantalla = document.getElementById("pantalla");
let action = document.getElementById("action");

function recarga() {
    document.getElementById("pantalla").innerHTML = "";
    document.getElementById("action").innerHTML = "";
}

function jarvis(data) {
    var speech = new SpeechSynthesisUtterance;
    speech.text = 'ficha' + data.paciente + 'pase a unifila';
    speech.volume = 9;
    speech.rate = 0.7;
    speech.pitch = 1.5;
    window.speechSynthesis.speak(speech);
}
    

socket.on("datos:captura", function (data) {
    recarga();
    jarvis(data);
    jarvis(data);
    jarvis(data);
    jarvis(data);

    pantalla.innerHTML += `<p>
        <strong>${data.paciente}</strong>
    </p>`
    action.innerHTML += `<p>
        <strong>${data.consultorio}</strong>
    </p>`
});

app.get('/video', (req, res) => {
    
});