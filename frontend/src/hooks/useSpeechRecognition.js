import { useState, useEffect } from "react";

let recognition = null;

if (("webkitSpeechRecognition" || "SpeechRecognition") in window) {
  recognition =
    new window.webkitSpeechRecognition() || new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [usedVoice, setUsedVoice] = useState(false);

  useEffect(() => {
    if (!recognition) return;
    recognition.onresult = (event) => {
      console.log(event);
      if (event.results[0][0].transcript) {
        setText(event.results[0][0].transcript);
      } else {
        setText("");
      }
      recognition.stop();
      setIsListening(false);
    };
  }, []);

  const startListening = () => {
    if (recognition) {
      // console.log("es");
      setUsedVoice(true);
      setText("");
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return {
    text,
    setText,
    isListening,
    usedVoice,
    setUsedVoice,
    startListening,
    stopListening,
    hasRecognition: !!recognition,
  };
};

export default useSpeechRecognition;
