// import { MdLocalHospital } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";
import { Link } from "react-router-dom";

function LandingNavbar({ setOpen }) {
  return (
    <div className="bg-[#FBE4FF] flex justify-between items-center p-1 shadow-md ">
      {/* <div className="font-black py-3 text-4xl">Nishauri</div> */}
      <button className="lg:block hidden h-[50px] w-[50px] m-1 rounded-xl bg-contain bg-no-repeat  bg-[url('https://play-lh.googleusercontent.com/dOtBnrlwTJvTdmJeWy_Bu6iYJb0DjrckeIaYuYBDlYx_1kjiDAM7EGAzaZ37L18JgA0=w240-h480')]"></button>
      <FiSidebar
        onClick={() => {
          setOpen();
        }}
        className="lg:hidden top-5 left-5 cursor-pointer mx-4"
      />
      <div className="lg:flex justify-evenly hidden">
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl transition hover:transition hover:scale-105 active:transition ">
          Home
        </button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl transition hover:transition hover:scale-105 active:transition ">
          Services
        </button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl transition hover:transition hover:scale-105 active:transition ">
          About Us
        </button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl transition hover:transition hover:scale-105 active:transition ">
          Contact Us
        </button>
      </div>
      <div className="lg:hidden flex text-3xl px-6 py-3">
        <button className="lg:block h-[40px] w-[40px] m-1 rounded-xl bg-contain bg-no-repeat  bg-[url('https://play-lh.googleusercontent.com/dOtBnrlwTJvTdmJeWy_Bu6iYJb0DjrckeIaYuYBDlYx_1kjiDAM7EGAzaZ37L18JgA0=w240-h480')]"></button>
        <span className="p-1">Nishauri</span>
      </div>
      <Link to="/login">
        <button className="transition hover:transition hover:scale-110 active:transition bg-[#B273F0] rounded-3xl px-6 py-2 text-white text-2xl hover:bg-white hover:text-black active:bg-black active:text-white">
          Login
        </button>
      </Link>
    </div>
  );
}

export default LandingNavbar;
