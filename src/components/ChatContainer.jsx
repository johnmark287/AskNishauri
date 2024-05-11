// import React from 'react'

import ChatMessage from "./ChatMessage";

function ChatContainer() {
  return (
    <div className="relative text-white pl-3 h-[100%] overflow-y-scroll">
      <ChatMessage sender="User" message="jasbdhsadkjsahd" timestamp="12-23-23"/>
    </div>
  );
}

export default ChatContainer