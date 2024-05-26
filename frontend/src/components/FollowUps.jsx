import React from "react";
import PropTypes from "prop-types";

function FollowUps({ questions }) {
  return (
    <div className="flex w-full">
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex 
        m-2 p-2 rounded-2xl"
        >
          <div className="text-left min-w-[80px] border border-[#B273F0] rounded-2xl p-2">
            <div className="prose prose-sm max-w-none">{question}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

FollowUps.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FollowUps;
