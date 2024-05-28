import PropTypes from "prop-types";
import { useState, useRef } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";

function Inputbar({ children, handleInput, handleEnterKey, isLoading, text, setText, isListening, startListening, stopListening}) {


  const inputRef = useRef(null);
  // ...
  function handleButtonClick() {
    if (isListening) {
      stopListening();
    } else {
      startListening();
      inputRef.current.focus();
    }
  }



  const [sendButton, setSendButton] = useState(false);
  function handleChange(e) {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      setSendButton(true);
    } else {
      setSendButton(false);
    }
  }

  return (

    <div className="bg-gradient-to-t from-[#fbe2ff] to-white ">
        {children}
      <div className="text-white flex justify-center items-center h-[80px] md:h-[100px] lg:h-[80px]">
        <div className=" absolute bg-[#ffffff] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] rounded-3xl p-2 border-[2.5px] border-[#fbe2ff]">
          <input
            ref={inputRef}
            className="ml-3 relative outline-none bg-transparent text-black w-[95%] relative pr-[9%] sm:pr-[7%] md:pr-[6%] lg:pr-[4%] pl-3 outline-none bg-transparent text-black w-full"
            onChange={handleChange}
            value={`${isLoading ? "" : text}`}
            type="textarea"
            name="input"
            id="input"
            placeholder="Ask Nishauri..."
            onKeyDown={handleEnterKey}
            disabled={isLoading}
          />
          <div className="flex">
            <button
              type="submit"
              onClick={handleButtonClick}
              // disabled={true}
              className={`${
                isListening ? "bg-[#e0c8f6] animate-pulse" : ""
              } rounded-2xl absolute bottom-[3px] right-[43px] p-[3px] active:bg-[#e0c8f6] `}
            >
              <svg
                // className="focus:animate-ping"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill={`${!isLoading ? "#c791fb" : "#e8eaed"}`}
              >
                <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
              </svg>
            </button>
            <button
              type="submit"
              onClick={handleInput}
              className={`rounded-2xl absolute bottom-[3px] right-2 p-[3px] bg-transparent ${
                sendButton ? "hover:bg-[#e0c8f6]" : " "
              }`}

              <svg
                // className="fill-current  text-black hover:fill-[hsl(216,8%,12%)] hover:text-[hsl(216,8%,12%)]  rounded-2xl"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill={`${isLoading || !sendButton ? "#e8eaed" : "#c791fb"}`}
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Inputbar.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleEnterKey: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Inputbar;
