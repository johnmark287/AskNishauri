import nicole from "./../assets/nicole.jpeg";
import ephraim from "./../assets/ephraim.jpg";
import collins from "./../assets/collins.jpg";
import johnmark from "./../assets/johnmark.jpg";
import chris from "./../assets/chris.jpeg";
import { Fade } from "react-awesome-reveal";

function Socials() {
  return (
    <div className="bg-[#4D4949] text-white p-5 flex flex-col justify-evenly">
      <Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="relative h-[80px] m-3 w-[80px]">
            <a
              href="https://www.linkedin.com/in/nicole-lynsey-6b313b235/"
              target="_blank"
            >
              <img
                src={nicole}
                alt="Nicole's Profile"
                className="absolute h-full w-full rounded-full object-cover hover:scale-110 transition hover:transition active:transition "
              />
            </a>
          </div>
          <div className="relative h-[80px] m-3 w-[80px]">
            <a
              href="https://www.linkedin.com/in/ephraim-shikanga/"
              target="_blank"
            >
              <img
                src={ephraim}
                alt="Ephraim's Profile"
                className="absolute h-full w-full rounded-full object-cover hover:scale-110 transition hover:transition active:transition "
              />
            </a>
          </div>
          <div className="relative h-[80px] m-3 w-[80px]">
            <a
              href="https://www.linkedin.com/in/coll-treks-45106922a/"
              target="_blank"
            >
              <img
                src={collins}
                alt="Collins's Profile"
                className="absolute h-full w-full rounded-full object-cover hover:scale-110 transition hover:transition active:transition "
              />
            </a>
          </div>
          <div className="relative h-[80px] m-3 w-[80px]">
            <a
              href="https://www.linkedin.com/in/johnmark-muhando-69a05b270/"
              target="_blank"
            >
              <img
                src={johnmark}
                alt="Johnmark's Profile"
                className="absolute h-full w-full rounded-full object-cover hover:scale-110 transition hover:transition active:transition "
              />
            </a>
          </div>
          <div className="relative h-[80px] m-3 w-[80px]">
            <a href="" target="_blank">
              <img
                src={chris}
                alt="Chris' Profile"
                className="absolute h-full w-full rounded-full object-cover hover:scale-110 transition hover:transition active:transition "
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Socials;
