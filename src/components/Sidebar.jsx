import PropTypes from 'prop-types';

function Sidebar({open, setOpen}) {
  return (
    <aside className={`${open ? "w-[260px]" : "w-[-260px]"} duration-300 bg-[rgba(35,38,43,255)] h-screen flex flex-col text-[rgba(131,142,152,255)]`}>
      <div className="flex justify-between text-left m-1 p-[6px] relative border-b border-b-gray-500">
        <div className="py-[2.23px]">
          AskNishauri
        </div>
        <button type="button" onClick={() => setOpen()} className=" pr-[1px] mr-[2px]">
          <svg className="active:fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>
      <button type="button" className="hover:bg-[rgba(131,142,152,255)] active:bg-[rgba(29,31,34,255)] my-2 py-[7px] bg-[rgba(72,81,89,255)] rounded-3xl w-[90%] self-center text-white">
        Create chat
      </button>
      <div className="m-2">
        History
      </div>
    </aside>
  )
}
// Define propTypes for the Sidebar component
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar