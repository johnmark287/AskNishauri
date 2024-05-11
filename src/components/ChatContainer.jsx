// import React from 'react'
import PropTypes from "prop-types";

import ChatMessage from "./ChatMessage";

function ChatContainer({ messages }) {
  return (
    <div className="relative text-white pl-3 h-[100%] overflow-y-scroll">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          message={message.message}
          timestamp={message.timestamp}
        />
      ))}
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
};

export default ChatContainer;
