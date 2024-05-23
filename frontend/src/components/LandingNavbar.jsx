// import { MdLocalHospital } from "react-icons/md";

function LandingNavbar() {
  return (
    <div className="bg-[rgba(62,105,236,255)] fixed right-0 left-0 flex justify-between">
      <div className="hover:text-[#42485a] text-white active:text-black hover:cursor-pointer my-3 p-2 mx-2 font-black scale-125">
        {/* <span>
          <MdLocalHospital />
        </span> */}
        Nishauri
      </div>
      <div className="flex">
        <button className="hover:text-[#42485a] text-white active:text-black  m-3 mx-11 p-2 font-bold">
          Home
        </button>
        <button className="hover:text-[#42485a] text-white active:text-black  m-3 mx-11 p-2 font-bold">
          About
        </button>
        <button className="hover:text-[#42485a] text-white active:text-black  m-3 mx-11 p-2 font-bold">
          Contact Us
        </button>
        <button className="hover:text-[#42485a] text-white active:text-black  m-3 mx-11 p-2 font-bold">
          Services
        </button>
      </div>
      <div className="">
        <button className="text-[#42485a] bg-white rounded-3xl m-3 p-2 px-5 font-bold">
          Login
        </button>
      </div>
    </div>
  );
}

export default LandingNavbar;
