// import React from 'react'
import PropTypes from "prop-types";

function formatText(input) {
  let lines = input.split("\n");
  let formattedLines = [];
  let sentenceCount = 0;

  lines.forEach((line) => {
    // Process bold formatting
    line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Split line by `* ` and process each segment
    let segments = line.split("* ").filter((segment) => segment.trim() !== "");

    segments.forEach((segment) => {
      sentenceCount++;
      formattedLines.push(`${sentenceCount}. ${segment.trim()}`);
    });

    // Add a new line for clarity between original lines
    formattedLines.push("");
  });

  // Join the processed lines back into a single string
  return formattedLines.join("\n").trim();
}

function ChatMessage({ sender, timestamp, message }) {
  const formattedMessage = formatText(message);

  return (
    <div
      className={`${
        sender === "Nishauri" ? "justify-start" : "justify-end"
      } my-3 flex`}
    >
      <div
        className={`${
          sender === "Nishauri"
            ? "border border-[#B273F0] text-black max-w-[75%] rounded-bl-none"
            : "bg-[#B273F0] text-white max-w-[75%] rounded-br-none"
        } relative p-2 m-2 rounded-2xl `}
      >
        <div className="text-left min-w-[80px] ">
          <span dangerouslySetInnerHTML={{ __html: formattedMessage }} />
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
  );
}

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
