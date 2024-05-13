// import React from 'react'
import PropTypes from "prop-types";

function ChatMessage({ sender, timestamp, message }) {
  return (
    <div className="pl-[10px] flex items-center border border-[#25282d]  py-2 m-2 rounded-sm">
      <div className="">
        <div
          className={`min-w-[160px] font-bold ${
            sender === "AskNishauri" ? "text-[#29f6ac]" : "text-[#5aa2e0]"
          }`}
        >
          {sender}
        </div>
        <div className="text-[#808993]">On, {timestamp}</div>
      </div>
      <div className="">{message}</div>
    </div>
  );
}

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
