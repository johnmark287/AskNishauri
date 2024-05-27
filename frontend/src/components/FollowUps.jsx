import PropTypes from "prop-types";

function FollowUps({ questions }) {
  return (
    <div className="flex w-full items-center justify-center">
      {questions.map((question, index) => (
          <div key={index} className="box flex m-2 p-2 rounded-2xl ">
            <div className="prose prose-sm max-w-none ">{question}</div>
          </div>
      ))}
    </div>
  );
}

FollowUps.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FollowUps;
