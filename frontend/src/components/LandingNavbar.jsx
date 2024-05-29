// import { MdLocalHospital } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";

function LandingNavbar() {
  return (
    <div className="bg-[#FBE4FF] flex justify-between items-center p-2 shadow-md ">
      {/* <div className="font-black py-3 text-4xl">Nishauri</div> */}
      <button className="h-[50px] w-[50px] m-1 rounded-xl bg-contain bg-no-repeat  bg-[url('https://play-lh.googleusercontent.com/dOtBnrlwTJvTdmJeWy_Bu6iYJb0DjrckeIaYuYBDlYx_1kjiDAM7EGAzaZ37L18JgA0=w240-h480')]"></button>
      <FiSidebar className="mt-3 ml-3 hidden top-5 left-5 cursor-pointer" />
      <div className="flex justify-evenly">
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl">Home</button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl">Services</button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl">About Us</button>
        <button className="px-6 py-3 hover:bg-[#B273F0] hover:text-white active:bg-black rounded-2xl">Contact Us</button>
      </div>
      <button className="bg-[#B273F0] rounded-3xl px-6 py-2 text-white text-2xl hover:bg-white hover:text-black active:bg-black active:text-white">
        Login
      </button>
    </div>
  );
}

export default LandingNavbar;
