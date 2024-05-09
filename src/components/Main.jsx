import Navbar from "./Navbar";

/**
 * input todo: fix text overflowing its component
 * main todo: main and sidebar components not occupying the whole page
 */
function Main() {
  return (
    // main
    <div className="relative flex flex-col box-border bg-[rgba(29,31,34,255)] h-screen w-full">
      {/* navbar comonent */}
      <Navbar />
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
      <div className="flex justify-center items-center absolute bottom-0 right-0 left-0  h-20 bg-[rgba(29,31,34,255)] ">
        <div className="absolute bg-[#23262b] w-[69%] rounded-3xl p-2">
          <input
            className="break-normal break-words whitespace-nowrap outline-none bg-transparent w-[95%]"
            type="textarea"
            name="input"
            id="input"
          />
          <button
            type="submit"
            className="rounded-xl absolute bottom-2 right-2 bg-[#244b42]"
          >
            <svg
              className="fill-current text-[#27c08a] p-[2px]"
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
