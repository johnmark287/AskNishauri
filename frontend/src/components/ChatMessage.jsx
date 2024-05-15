// import React from 'react'
import PropTypes from "prop-types";

function ChatMessage({ sender, timestamp, message }) {
  return (
    <div
      className={`${
        sender === "AskNishauri" ? "justify-start" : "justify-end"
      } my-3 flex`}
    >
      <div
        className={`${
          sender === "AskNishauri"
            ? "bg-white text-black max-w-[75%]"
            : "bg-[#B273F0] text-white max-w-[75%]"
        } relative p-2 m-2 rounded-2xl`}
      >
        <div className="text-left min-w-[80px] ">
          <span>{message}</span>
        </div>
        <div className="">
          {/* <div className={`hidden  min-w-[160px] font-bold ${sender === "AskNishauri" ? "text-[#29f6ac]" : "text-[#5aa2e0]" }`}>{sender}</div> */}
          <div className="absolute -bottom-4 right-2 text-black text-[10px]">
            {timestamp}
          </div>
        </div>
        {/* <div className={` ${sender === "AskNishauri" ? "absolute rounded-full h-[20px] w-[20px] bottom-2 left-[-9px] z-1 bg-white" : "absolute rounded-full h-[20px] w-[20px] bottom-2 right-[-9px] z-1 bg-[#B273F0]"}`}></div>
        <div className={` ${sender === "AskNishauri" ? "absolute rounded-full h-[20px] w-[20px] bottom-3 left-[-19.1px] z-0 bg-gradient-to-b from-[#fbe2ff] to-white" : "absolute rounded-full h-[20px] w-[20px] bottom-3 right-[-19.1px] z-0 bg-[#fbe2ff]"}`}></div> */}
      </div>
    </div>
  );
}

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
