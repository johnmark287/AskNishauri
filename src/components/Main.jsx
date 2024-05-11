import { useState } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

function Main({ open }) {
  const [logout, setLogout] = useState(false);
  const [settings, setSettings] = useState(false);

  function handleLogout() {
    setLogout(!logout);
  }

  function handleSettings() {
    setSettings(!settings);
  }
  return (
    // main
    <div className="relative flex flex-col box-border bg-[rgba(29,31,34,255)] h-screen w-full">
      {/* navbar component */}
      <Navbar logout={logout} setLogout={handleLogout} settings={settings} setSettings={handleSettings} open={open} />

      {/* Main Component */}
      <div className="relative text-white pl-3 h-[100%] overflow-y-scroll">
        <div className="pl-[10px] flex items-center border-b border-b-[#25282d] h-[40px] py-[27px]">
          <div className="">
            <div className="min-w-[160px] font-bold text-[#5aa2e0]">User</div>
            <div className="text-[#808993]">at Tue, 28 Feb</div>
          </div>
          <div className="">How does AskNishauri work?</div>
        </div>
        <div className="relative pl-[10px] h-[100%] py-[20px] flex flex-col">
          <div className="flex flex-row">
            <div className="self-start">
              <div className="text-[#29f6ac] min-w-[160px] h-[100%]">
                AskNishauri
              </div>
              <div className="text-[#808993]">Response 04:21 a.m</div>
            </div>
            <div className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              blanditiis facilis perferendis ab obcaecati magni omnis numquam
              quos tenetur hic odit ipsum commodi beatae quaerat recusandae
              eligendi iste repellat officia aperiam cupiditate delectus, non
              quisquam corporis magnam! Velit, quisquam provident! Quo nemo
              deleniti libero suscipit officiis fuga sequi dolorem nam iste
              aperiam, nobis distinctio, ut quidem provident ex iure maiores
              animi vitae consequuntur exercitationem architecto qui ratione
              consequatur. Eveniet neque ullam nam officia atque laboriosam. Ex
              facilis eaque omnis non dolorem aspernatur soluta placeat sunt,
              unde id accusamus debitis hic nobis impedit saepe quod, repellat
              iure aliquid itaque. Distinctio consectetur eos assumenda harum a
              itaque laboriosam velit voluptatem. Magni aliquam eum quasi
              quisquam exercitationem, deleniti nesciunt unde sed, inventore
              fugiat quibusdam temporibus quas a, alias tempore fuga eligendi
              beatae et esse. Quidem sapiente hic veniam, assumenda temporibus
              repellendus atque sint laborum ipsa deleniti debitis rerum
              suscipit corrupti facere ipsam, quasi tempora laboriosam illum
              fuga nesciunt est distinctio. Vel voluptatem commodi ex
              exercitationem reiciendis sit ipsum beatae quidem magnam ducimus
              ipsa laborum, eius explicabo minus doloremque natus dolorem?
              Maiores id culpa amet laudantium itaque sunt debitis praesentium
              adipisci, laboriosam cumque eligendi excepturi asperiores
              consequuntur nemo iure, natus velit, autem commodi sed corporis
              quia quas tenetur consequatur eos? Reprehenderit culpa nulla,
              autem necessitatibus quam totam. Earum nisi modi, aliquam
              voluptatum aut tempora quia officia. Dicta ab reprehenderit
              numquam quibusdam fugit, fugiat labore ducimus molestiae quis
              iusto hic assumenda voluptas temporibus culpa dignissimos quas
              reiciendis, consectetur expedita soluta adipisci natus
              exercitationem! Aliquam, corrupti.
            </div>
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

// Define propTypes for the bar component
Main.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Main;
