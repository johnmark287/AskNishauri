// import chat from "./../assets/chat.png";
import chat1 from "./../assets/chat1.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function LandingMain({ open }) {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <Fade duration={100}>
        <div className="h-[781.51px] bg-cover bg-center rounded-3xl m-3 md:m-5 my-10 shadow-md bg-[url('https://img.freepik.com/free-photo/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed_482257-16526.jpg?t=st=1716722515~exp=1716726115~hmac=6788e0c25a0477a93bfcbc1ac9222b2e97c999e4c0860431797eb2c4fd734b25&w=740')]">
          <div className="flex flex-col md:flex-row items-center h-[80%]">
            <div className="h-full flex flex-col md:flex-row items-center justify-center text-white w-full lg:w-[50%] p-3">
              <div className="flex flex-col">
                <div className="font-semibold text-6xl p-2">
                  Message Nishauri
                </div>
                <div className="text-3xl p-2">
                  <div>Your Personal Assistant</div>
                  <div>Reliable and Available</div>
                </div>
              </div>
            </div>
            <div className="md:flex w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] p-3 pt-20 flex-col">
              <div className="relative p-3 ml-10 my-7 self-start bg-[#D9D9D9]  rounded-3xl rounded-bl-none">
                <div>Hello! How can I assist you today?</div>
                <div className="absolute -bottom-6 text-sm left-0">
                  12:12 p.m.
                </div>
              </div>
              <div className="relative self-end p-3 mr-10 my-7 text-white bg-[#B273F0] rounded-3xl rounded-br-none">
                <div>What are the symptoms of malaria</div>
                <div className="absolute -bottom-6 text-sm right-0">
                  12:13 p.m.
                </div>
              </div>
              <div className="self-start h-[53px] ml-10 w-[550px] my-7 bg-no-repeat bg-contain bg-[url('https://scontent.whatsapp.net/v/t39.8562-34/327063196_5800887573364035_3294745791563659576_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=18v_pLYcHxEQ7kNvgH7ztpc&_nc_ht=scontent.whatsapp.net&oh=01_Q5AaIGlm-1iSIHPCZ1Bl91_GgFz0sF3ZGH_5W5Herpre_thm&oe=6658E48E')]"></div>
            </div>
          </div>
          <div className="text-white flex justify-center items-center h-[20%]">
            <Link to="/login">
              <button className="transition hover:transition hover:scale-105 active:transition md:font-semibold text-2xl sm:text-3xl md:text-4xl bg-[#B273F0] p-4 sm:p-6  md:p-8 rounded-full hover:bg-white hover:text-black active:bg-black active:text-white">
                <Fade duration={350}>
                  Get Started
                </Fade>
              </button>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade duration={500}>
        <div className="text-center flex justify-center items-center m-6 md:h-[400px]">
          <p className="w-full m-4 text-4xl sm:text-5xl md:text-6xl">
            With a personal assistant, you can find more about disease symptoms,
            and recommendations on your lifestyle, improve your life and take
            care of your health.
          </p>
        </div>
        <div className="md:h-[500px] p-6 bg-gradient-to-b from-[#B273F0] to-white flex flex-col md:flex-row">
          <div className="h-full w-full flex md:justify-center md:items-center m-5">
            <div className="h-[290px] w-[280px] sm:h-[320px] sm:w-[310px] md:h-[350px] md:w-[340px] rounded-3xl bg-no-repeat bg-contain bg-[url('https://www.shutterstock.com/image-vector/audio-record-concept-voice-messages-600w-2314211757.jpg')]"></div>
          </div>
          <div className="m-5 w-full flex flex-col justify-center items-center">
            <p className="font-medium text-4xl sm:text-5xl">
              Do not spend a lot of time typing, just speak to Nishauri like
              your friend.
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={500}>
        <div className="flex flex-col md:flex-row text-white bg-[#B273F0]">
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="font-semibold text-4xl sm:text-5xl m-5">
              <p>Deal with Emergency situations fast</p>
            </div>
            <div className="text-3xl sm:text-4xl m-5">
              <p>
                Do not panic while in an emergency, find the nearest hospital to
                get help as fast as possible.
              </p>
            </div>
          </div>
          <div className="m-5 md:w-1/2 flex justify-center items-center relative">
            <img
              src={chat1}
              alt="Chat"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </Fade>
      <Fade duration={500}>
        <div className="text-center flex justify-center items-center">
          <p className="m-5 text-4xl sm:text-5xl md:text-6xl">
            Make appointments with your doctor for consultations and private
            sessions with the doctor, to keep track of your progress and health,
            work and keep in touch with the doctor directly.
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default LandingMain;
