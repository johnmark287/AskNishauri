import PropTypes from "prop-types";
import { MdOutlineMoreVert } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar({
  logout,
  setLogout,
  settings,
  setSettings,
  // open,
  closeSettingsRef,
  closeLogoutRef,
  // settingsId
}) {
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    await fetch("http://127.0.0.1:5000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: localStorage.getItem("id"),
        history: JSON.parse(localStorage.getItem("history")),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.removeItem("user");
          localStorage.removeItem("id");
          localStorage.removeItem("details");
          localStorage.removeItem("history");
          localStorage.removeItem("followups");
          navigate("/login", { replace: true });
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="relative flex justify-between bg-[#fbe2ff] p-3">
      <div
        ref={closeLogoutRef}
        className="hover:cursor-pointer hover:text-white active:bg-white hover:bg-[#e0c8f6] transition duration-200 ease-in bg-[#c791fb] rounded-2xl flex justify-between"
      >
        <button
          type="button"
          onClick={() => {
            setLogout();
          }}
          className="my-1 mx-4 hover:text-white text-white"
        >
          {localStorage.getItem("user")}
        </button>
        <div
          className={`${
            logout ? "block" : "hidden"
          } shadow-sm shadow-white absolute left-[96px] top-[47px] z-40 text-black hover:text-black bg-white rounded-md p-1`}
        >
          <a
            onClick={handleLogout}
            className="hover:bg-[#c791fb] transition duration-200 ease-in rounded-md active:bg-[rgba(82,91,100,255)] p-1 md:px-3"
          >
            Log Out
          </a>
        </div>
        {/* <button className="hidden my-1 ml-3">
          <svg
            className="text-[#87929a] fill-current"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button> */}
      </div>
      {/* <div className="hidden md:block font-black translate-y-1 scale-y-150 scale-x-150">
        Chat with Nishauri
      </div> */}
      {/* <div className="flex justify-between"> */}
      {/* <button
          type="button"
          className="px-2 mx-1 text-[rgba(37,188,134,255)] hover:text-[hsl(216,8%,12%)] hover:bg-[rgb(118,194,166)] active:bg-[rgb(19,94,67)] rounded-2xl bg-[rgba(30,48,44,255)]"
        >
          Export chat
        </button> */}
      {/* <div className="active:bg-[rgba(82,91,100,255)] hover:bg-[#e0c8f6] bg-[#c791fb] rounded-md"> */}
      <div ref={closeSettingsRef}>
        <MdOutlineMoreVert
          type="button"
          onClick={() => {
            setSettings();
          }}
          className={`h-6 fill-current hover:fill-white text-white border active:bg-[rgba(82,91,100,255)] hover:bg-[#e0c8f6] bg-[#c791fb] rounded-md`}
          // className="active:bg-[rgba(82,91,100,255)] hover:bg-[#e0c8f6] bg-[#c791fb] p-1 rounded-md "
          // {/* <svg
          //   className={` fill-current hover:fill-white text-white`}
          //   xmlns="http://www.w3.org/2000/svg"
          //   height="24px"
          //   viewBox="0 -960 960 960"
          //   width="24px"
          //   fill="#e8eaed"
          // >
          //   <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
          // </svg> */}
        />
        <div
          className={`${
            settings ? "block" : "hidden"
          } shadow-sm shadow-white bg-white rounded-md absolute right-[40px] z-50 top-[47px]`}
          // id={settingsId}
        >
          <a
            className="hover:bg-[#c791fb] transition duration-200 ease-in block hover:text-white active:bg-[rgba(82,91,100,255)] rounded-md m-1 p-1"
            href=""
          >
            Theme
          </a>
          <a
            className="hover:bg-[#c791fb] transition duration-200 ease-in block hover:text-white active:bg-[rgba(82,91,100,255)] rounded-md m-1 p-1 md: text-nowrap"
            href=""
          >
            Change Language
          </a>
          <a
            className="hover:bg-[#c791fb] transition duration-200 ease-in block hover:text-white active:bg-[rgba(82,91,100,255)] rounded-md m-1 p-1"
            href=""
          >
            Export Chat
          </a>
          <a
            className="hover:bg-[#c791fb] transition duration-200 ease-in block hover:text-white active:bg-[rgba(82,91,100,255)] rounded-md m-1 p-1 md:text-nowrap"
            href=""
          >
            Delete Whole Chat
          </a>
        </div>
      </div>
      {/* </div> */}
      <button type="button" className="hidden mx-1">
        {" "}
        {/* hidden on large screen size and visible on small screen size */}
        <svg
          className={`${
            open ? "hidden" : "hidden md:block"
          } fill-current text-[rgba(82,91,100,255)] tooltip`}
          title="Create chat"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
        </svg>
      </button>
      {/* </div> */}
    </div>
  );
}

// Define propTypes for the Navbar component
Navbar.propTypes = {
  logout: PropTypes.bool.isRequired,
  setLogout: PropTypes.func.isRequired,
  // open: PropTypes.bool.isRequired,
  setSettings: PropTypes.func.isRequired,
  settings: PropTypes.bool.isRequired,
  closeSettingsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  closeLogoutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  // settingsId: PropTypes.bool.isRequired,
};

export default Navbar;
