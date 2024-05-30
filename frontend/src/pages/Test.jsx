import React from "react";
import { useSpeech } from "react-text-to-speech";



export default function App() {
  const txt = "Hello World!";



  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text: txt,
  });

  return (
    <div>
      <Text />
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
