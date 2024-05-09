import PropTypes from "prop-types";

function Sidebar({ open, setOpen }) {
  return (
    <aside
      className={`${
        open ? "md:w-[260px]" : "w-[-260px]"
      } duration-300 bg-[rgba(35,38,43,255)] h-screen flex flex-col text-[rgba(131,142,152,255)]`}
    >
      <div className="flex justify-between text-left m-1 p-[6px] relative border-b border-b-gray-500">
        <div className={`${open ? "hidden md:block" : "hidden"} py-[2.23px]`}>AskNishauri</div>
        <button
          type="button"
          onClick={() => setOpen()}
          className=" pr-[1px] mr-[2px]"
        >
          <svg
            className="active:fill-current"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      <button
        type="button"
        className={`flex hover:bg-[rgba(131,142,152,255)] active:bg-[rgba(29,31,34,255)] my-2 py-[7px] bg-[rgba(72,81,89,255)] rounded-3xl w-[90%] self-center text-white`}
      >
        <svg
          className="mx-2  px-[2px] fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
        </svg>
        <span className={`${open ? "hidden md:block" : "hidden"} hover: `}>Create chat</span>
      </button>
      <div className={`${open ? "hidden md:block" : "hidden"} m-2`}>History</div>
    </aside>
  );
}
// Define propTypes for the Sidebar component
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
