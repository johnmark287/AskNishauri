// import React from 'react'
import PropTypes from "prop-types";

import ChatMessage from "./ChatMessage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ChatContainer({ messages, isLoading, messagesEndRef }) {
  return (
    <div className="bg-gradient-to-b from-[#fbe2ff] to-white relative text-white pl-3 h-full overflow-y-scroll">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          message={message.message}
          timestamp={message.timestamp}
        />
      ))}
      {isLoading && (
        <div className="flex justify-start">
          {/* <div className="bg-white max-w-[75%] relative flex items-center p-2 m-2 rounded-2xl"></div> */}
          <div className="min-w-[250px]">
            <Skeleton
              duration={3}
              count={1}
              height={2}
              className="w-[100%] m-[1px] gap-0"
            />
            <Skeleton
              duration={3}
              count={1}
              height={2}
              className="w-[100%] m-[1px] gap-0"
            />
            <Skeleton
              duration={3}
              count={1}
              height={2}
              className="w-[100%] m-[1px]"
            />
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
