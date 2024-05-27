// import React from 'react'
import useSpeechRecognition from '../hooks/useSpeechRecognition'


function Test() {
  const {text, isListening, startListening, stopListening, hasRecognition} = useSpeechRecognition();

  return (
    <div>
      {hasRecognition ? (
        <div>
          <h1>Speech Recognition is available!</h1>
          <div className="flex flex-col">
            <button className="border" onClick={startListening}>
              Start
            </button>
            <button className="border" onClick={stopListening}>
              Stop
            </button>
          </div>
          <p>{text}</p>
          {isListening && <p>Go ahead listening</p>}
        </div>
      ) : (
        <div>
          <h1>Speech Recognition is not available!</h1>
        </div>
      )}
    </div>
  );
}

export default Test
