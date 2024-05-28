// import { MdLocalHospital } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";

function LandingNavbar() {
  return (
    <div className="bg-[#FBE4FF] flex justify-between items-center p-2 shadow-md ">
      <div className="font-black py-3 text-4xl">Nishauri</div>
      <FiSidebar className="mt-3 ml-3 hidden top-5 left-5 cursor-pointer" />
      <div className="flex py-5 justify-evenly">
        <div className="px-6">Home</div>
        <div className="px-6">Services</div>
        <div className="px-6">About Us</div>
        <div className="px-6">Contact Us</div>
      </div>
      <button className="bg-[#B273F0] rounded-3xl px-6 text-white text-2xl">
        Login
      </button>
    </div>
  );
}

export default LandingNavbar;
