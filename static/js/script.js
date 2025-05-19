let recognition;
let recognizing = false;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = function(event) {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript;
    }
    document.getElementById("recognizedText").innerText = transcript;
  };

  recognition.onerror = function(event) {
    console.error("Speech recognition error", event.error);
  };
}

function startRecognition() {
  if (!recognizing) {
    recognition.start();
    recognizing = true;
  }
}

function stopRecognition() {
  if (recognizing) {
    recognition.stop();
    recognizing = false;
  }
}

function speak() {
  const text = document.getElementById("speakText").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
