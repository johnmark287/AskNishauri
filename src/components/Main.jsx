import Navbar from "./Navbar";

/**
 * todo: whatsapp feature.
 */
function Main() {
  return (
    // main
    <div className="relative flex flex-col box-border bg-[rgba(29,31,34,255)] h-screen w-full">
      {/* navbar component */}
      <Navbar />

      {/* Main Component */}
      <div className="relative text-white h-[100%] overflow-y-scroll">
        <div className="flex justify-end p-2">
          <div className="relative min-w-[120px] p-2 pb-7 flex bg-black rounded-2xl items-center border-b border-b-[#25282d]">
            <div className="">
              <div className="hidden min-w-[160px] font-bold text-[#5aa2e0]">
                User
              </div>
              <div className="absolute bottom-2 right-3 text-[#808993]">
                4:21a.m
              </div>
            </div>
            <div className="flex flex-row self-end p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="relative p-1 flex ">
          <div className="relative bg-black min-w-[120px] p-2 pb-7 m-1 rounded-2xl flex self-start">
            <div className="  self-start">
              <div className="hidden text-[#29f6ac] min-w-[160px] h-[100%]">
                AskNishauri
              </div>
              <div className="absolute bottom-2 right-3 text-[#808993]">
                04:21 a.m
              </div>
            </div>
            <div className="p-1">
              Lorem ipsum dolor sit, amet consectetur.
            </div>
            {/* <div className="absolute rounded-[100%] h-[20px] w-[20px] bottom-2 right-[-10px] z-[-2px] bg-white"></div>
            <div className="absolute rounded-[100%] h-[20px] w-[20px] bottom-0 right-[-10px] z-[-1px] bg-black"></div> */}
          </div>
        </div>
      </div>
      {/* input */}
      <div className="text-white flex justify-center items-center bottom-0 right-0 left-0  h-[80px] bg-[rgba(29,31,34,255)] ">
        <div className="absolute bg-[#23262b] w-[69%] rounded-3xl p-2">
          <input
            className="ml-3 relative break-normal break-words whitespace-nowrap outline-none bg-transparent w-[95%]"
            type="textarea"
            name="input"
            id="input"
          />
          <button
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
          </button>
          <button
            type="submit"
            className="rounded-2xl absolute bottom-[5px] active:bg-[rgb(19,94,67)] right-2 p-[3px] bg-[rgba(30,48,44,255)] hover:bg-[rgb(118,194,166)]"
          >
            <svg
              className="fill-current  text-[rgba(37,188,134,255)] hover:fill-[hsl(216,8%,12%)] hover:text-[hsl(216,8%,12%)]  rounded-2xl"
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
    </div>
  );
}

export default Main;
