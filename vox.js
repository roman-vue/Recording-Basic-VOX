const btnStartRecord = document.getElementById("btnStart");
const btnStopRecord = document.getElementById("btnStop");
const btnPlay = document.getElementById("btnplayText");
const text = document.getElementById("text");

let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    text.value += frase;
};

btnPlay.addEventListener("click", () => {
    reading(text.value);
});

btnStartRecord.addEventListener("click", () => {
    recognition.start();
});

recognition.onend = (event) => {
    console.log("el microfono deja de escuchar");
};

recognition.onerror = (event) => {
    console.log("event.error :>> ", event);
};

btnStopRecord.addEventListener("click", () => {
    recognition.abort();
});

function reading(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
