import PropTypes from "prop-types";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function FollowUps({ questions, onQuestionClick }) {

  const removeBulletCharacters = (array) => {
    return array.map((item) => {
      let str = item.toString().trim();
      if (str.startsWith("- ") || str.startsWith("* ")) {
        str = str.substring(2);
      }
      return str;
    });
  };

  const resultArray = removeBulletCharacters(questions);

  return (
    <div className="flex w-full items-center justify-center">
      {resultArray.map((question, index) => (
        <Zoom duration={1000} key={index}>
          <div
            className="box flex m-2 p-2 rounded-2xl cursor-pointer hover:border-[#B273F0]"
            onClick={() => onQuestionClick(question)}
          >
            <div className="prose prose-sm max-w-none ">{question}</div>
          </div>
        </Zoom>
      ))}
    </div>
  );
}

FollowUps.propTypes = {
  questions: PropTypes.array,
  onQuestionClick: PropTypes.func.isRequired,
};

export default FollowUps;
