import { IoClose } from "react-icons/io5";
import Socials from "./Socials";

function LandingSidebar({ open, setOpen }) {
  return (
    <div
      className={`${
        open ? "hidden" : "block"
      } bg-white opacity-100 text-black px-5 h-screen absolute top-0 right-0 left-0 bottom-0 transition`}
    >
      <div className="h-[60%] flex flex-col justify-evenly ">
        <IoClose
          onClick={() => {
            setOpen();
          }}
          className={`w-[25px] my-3 h-full cursor-pointer active:text-[#4d494999] rounded-md`}
        />
        <div className="border-black transition active:bg-black active:text-white px-3 hover:bg-[#4d494999] w-full h-full border-t flex flex-col justify-center cursor-pointer">
          Home
        </div>
        <div className="border-black transition active:bg-black active:text-white px-3 hover:bg-[#4d494999] w-full h-full border-t flex flex-col justify-center cursor-pointer">
          Services
        </div>
        <div className="border-black transition active:bg-black active:text-white px-3 hover:bg-[#4d494999] w-full h-full border-t flex flex-col justify-center cursor-pointer">
          About Us
        </div>
        <div className="border-black transition active:bg-black active:text-white px-3 hover:bg-[#4d494999] w-full h-full border-t flex flex-col justify-center cursor-pointer">
          Contact Us
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default LandingSidebar;
