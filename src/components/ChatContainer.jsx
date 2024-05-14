// import React from 'react'
import PropTypes from "prop-types";

import ChatMessage from "./ChatMessage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ChatContainer({ messages, isLoading, messagesEndRef }) {
  return (
    <div className="bg-gradient-to-b from-[#fbe2ff] to-white relative text-white pl-3 h-[77%] overflow-y-scroll">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          message={message.message}
          timestamp={message.timestamp}
        />
      ))}
      {isLoading && (
        <div className="pl-[10px] flex items-center border border-[#25282d]  py-2 m-2 rounded-sm">
          <div className="">
            <div className="min-w-[160px] font-bold text-[#29f6ac]">
              AskNishauri
            </div>
            <Skeleton count={1} className="h-4 w-[100%]" />
          </div>
          <div className="w-full p-2">
            <Skeleton count={4} className="h-4 w-[100%]" />
          </div>
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

ChatContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  messagesEndRef: PropTypes.bool.isRequired,
};

export default ChatContainer;
