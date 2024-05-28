// import React from 'react'
import PropTypes from "prop-types";
import { marked } from "marked";
import "animate.css";
import { Fade } from "react-awesome-reveal";

function ChatMessage({ sender, timestamp, message }) {
  const prefix = "**Nishauri:**";
  let htmlContent;
  if (message.startsWith(prefix)) {
    // console.log("Message starts with Nishauri");
    htmlContent = marked.parse(message.substring(prefix.length).trim());
    // console.log(htmlContent);
  } else {
    // console.log("Message does not start with Nishauri");
    htmlContent = marked.parse(message);
  }

  return (
    <Fade duration={2500}>
      <div
        className={`${
          sender === "Nishauri" ? "justify-start" : "justify-end"
        } my-3 flex `}
      >
        <div
          className={`${
            sender === "Nishauri"
              ? "border border-[#B273F0] max-w-[75%] rounded-bl-none"
              : "bg-[#B273F0] max-w-[75%] rounded-br-none"
          } relative p-2 m-2 rounded-2xl `}
        >
          <div className="text-left min-w-[80px] ">
            <div
              className={` ${
                sender === "Nishauri" ? "" : "text-white"
              }  prose prose-lg max-w-none`}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
          <div className="">
            <div
              className={`absolute -bottom-4 text-black text-[10px] ${
                sender === "Nishauri" ? "left-2" : "right-2"
              }`}
            >
              {timestamp}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
