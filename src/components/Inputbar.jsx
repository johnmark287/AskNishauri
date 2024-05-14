import PropTypes from "prop-types";

function Inputbar({ handleInput, handleEnterKey }) {
  return (
    <div className="text-white flex justify-center items-center absolute bottom-0 right-0 left-0  h-[80px] bg-gradient-to-t from-[#fbe2ff] to-white ">
      <div className="absolute bg-[#ffffff] w-[69%] rounded-3xl p-2 border-[2.5px] border-[#fbe2ff]">
        <input
          className="ml-3 relative outline-none bg-transparent text-black w-[95%]"
          type="textarea"
          name="input"
          id="input"
          placeholder="AskNishauri..."
          onKeyDown={handleEnterKey}
        />
        {/* <button
            type="button"
            className="absolute right-[43px] active:bg-[rgba(29,31,34,255)] bg-[rgba(131,142,152,255)] bottom-[5px] rounded-2xl p-[3px]"
          >
            <svg
              className="hover:fill-white fill-current text-[#23262b]"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
            </svg>
          </button> */}
        <button
          type="submit"
          onClick={handleInput}
          className="rounded-2xl absolute bottom-[5px] active:bg-[#c791fb] right-2 p-[3px] bg-transparent hover:bg-[#e0c8f6]"
        >
          <svg
            className="fill-current  text-black hover:fill-[hsl(216,8%,12%)] hover:text-[hsl(216,8%,12%)]  rounded-2xl"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

Inputbar.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleEnterKey: PropTypes.func.isRequired,
};

export default Inputbar;
