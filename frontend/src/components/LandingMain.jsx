import chat from "./../assets/chat.png";
import nicole from "./../assets/nicole.jpeg";
import ephraim from "./../assets/ephraim.jpg";
import collins from "./../assets/collins.jpg";
import johnmark from "./../assets/johnmark.jpg";

function LandingMain() {
  return (
    <div className="h-screen">
      <div className="h-[761.51px] flex bg-cover rounded-3xl m-5 my-10 shadow-md bg-[url('https://img.freepik.com/free-photo/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed_482257-16526.jpg?t=st=1716722515~exp=1716726115~hmac=6788e0c25a0477a93bfcbc1ac9222b2e97c999e4c0860431797eb2c4fd734b25&w=740')]">
        <div className="h-full flex flex-col justify-center text-white w-[50%] p-3">
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-6xl p-2">Message Nishauri</div>
            <div className="text-3xl p-2">
              <div>Your Personal Assistant</div>
              <div>Reliable and Available</div>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-3 pt-20 flex flex-col">
          <div className="relative p-3 ml-10 my-7 self-start bg-[#D9D9D9]  rounded-3xl rounded-bl-none">
            <div>Hello! How can I assist you today?</div>
            <div className="absolute -bottom-6 text-sm left-0">12:12 p.m.</div>
          </div>
          <div className="relative self-end p-3 mr-10 my-7 text-white bg-[#B273F0] rounded-3xl rounded-br-none">
            <div>What are the symptoms of malaria</div>
            <div className="absolute -bottom-6 text-sm right-0">12:13 p.m.</div>
          </div>
          <div className="self-start h-[53px] ml-10 w-[550px] my-7 bg-no-repeat bg-contain bg-[url('https://scontent.whatsapp.net/v/t39.8562-34/327063196_5800887573364035_3294745791563659576_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=18v_pLYcHxEQ7kNvgH7ztpc&_nc_ht=scontent.whatsapp.net&oh=01_Q5AaIGlm-1iSIHPCZ1Bl91_GgFz0sF3ZGH_5W5Herpre_thm&oe=6658E48E')]"></div>
        </div>
      </div>
      <div className="text-center flex justify-center items-center h-[500px]">
        <p className="w-[75%] text-5xl">
          With a personal assistant, you can find more about disease symptoms,
          and recommendations on your lifestyle, improve your life and take care
          of your health.
        </p>
      </div>
      <div className="h-[500px] bg-gradient-to-b from-[#B273F0] to-white flex">
        <div className="text-5xl w-[50%] flex flex-col justify-center items-center">
          <p className="w-[64%] font-medium">
            Do not spend a lot of time typing, just speak to Nishauri like your
            friend.
          </p>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="h-[80%] w-[43%] rounded-3xl bg-no-repeat bg-contain bg-[url('https://www.shutterstock.com/image-vector/audio-record-concept-voice-messages-600w-2314211757.jpg')]"></div>
        </div>
      </div>
      <div className="flex text-white bg-[#B273F0] h-[700px]">
        <div className="w-1/2 flex justify-center items-center">
          <div className="h-[90%] ">
            <img
              src={chat}
              alt="Chat"
              className="object-cover h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="font-semibold text-5xl m-5">
            <p>Deal with Emergency situations fast</p>
          </div>
          <div className="text-4xl w-1/2 m-5">
            <p>
              Do not panic while in an emergency, find the nearest hospital to
              get help as fast as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center items-center h-[500px]">
        <p className="w-[75%] text-5xl">
          Make appointments with your doctor for consultations and private
          sessions with the doctor, to keep track of your progress and health,
          work and keep in touch with the doctor directly.
        </p>
      </div>
      <div className="h-[600px] bg-[#4D4949]">
        <div className="h-[80%] flex">
          <div className="w-[25%] flex flex-col justify-evenly items-center h-full">
            <div className="h-[200px] w-[200px] m-5 rounded-2xl bg-contain bg-no-repeat  bg-[url('https://play-lh.googleusercontent.com/dOtBnrlwTJvTdmJeWy_Bu6iYJb0DjrckeIaYuYBDlYx_1kjiDAM7EGAzaZ37L18JgA0=w240-h480')]"></div>
            <button className="bg-[#B273F0] p-3 rounded-3xl px-10 text-white">
              Login
            </button>
          </div>
          <div className="flex-1">
            <div className="flex justify-evenly">
              <div className="w-full">
                <div className="text-sm my-5 text-white">Who We Are</div>
                <div className="text-xl my-3">About Us</div>
                <div className="text-xl my-3">Careers</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">Use Nishauri</div>
                <div className="text-xl my-3">Android</div>
                <div className="text-xl my-3">PC</div>
                <div className="text-xl my-3">Nishauri Web</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">What We Do</div>
                <div className="text-xl my-3">Android</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">Need Help?</div>
                <div className="text-xl my-3">Contact Us</div>
                <div className="text-xl my-3">Help Center</div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-evenly items-center m-5">
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={nicole}
                    alt="Nicole's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={ephraim}
                    alt="Ephraim's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={collins}
                    alt="Collins's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={johnmark}
                    alt="Johnmark's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] w-[110px]">Chris</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 mx-5"></div>
      </div>
    </div>
  );
}

export default LandingMain;
