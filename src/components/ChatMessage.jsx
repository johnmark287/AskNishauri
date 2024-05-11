// import React from 'react'
import PropTypes from 'prop-types'

function ChatMessage({ sender, timestamp, message }) {
  return (
    <div className="pl-[10px] flex items-center border-b border-b-[#25282d] h-[40px] py-[27px]">
      <div className="">
        <div className="min-w-[160px] font-bold text-[#5aa2e0]">{sender}</div>
        <div className="text-[#808993]">{timestamp}</div>
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

export default ChatMessage
