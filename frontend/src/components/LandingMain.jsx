function LandingMain() {
  return (
    <div className="h-screen">
      <div className="flex items-center bg-fixed h-[500px] bg-[url('https://media.istockphoto.com/id/1369661892/photo/businessman-holding-virtual-blue-plus-sign-for-positive-thinking-mindset-or-healthcare.jpg?s=1024x1024&w=is&k=20&c=FgDQFVxOxGgIAn_qepPPf53BypFr3KfQTkHwId1KpA8=')]">
        <div className="">
          <h1 className="">User Data</h1>
          <p className="text-white w-[50%]">
            Using the User's health data trends to make recommendations for
            lifestyle changes, medication adjustments or preventive measures
          </p>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[rgba(62,105,236,255)] to-white h-[250px]">
        <h1>Integration with Telemedicine Services</h1>
        <p className="">
          Teleconsultation Booking: Nishauri is integrated with telemedicine
          platforms therefore enabling users to schedule virtual consultations
          through it.
        </p>
        {/* <img
          className="hidden h-[80%] opacity-45 absolute bottom-0 cover rounded-md m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZGuwvPRiep4izTj5i0uMzkWLioN-9Fzi6A&s"
          alt="Kenyan Health Workers"
        /> */}
      </div>
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZGuwvPRiep4izTj5i0uMzkWLioN-9Fzi6A&s')] bg-cover opacity-50 h-[500px] flex  flex-col items-center pt-2">
        <h1>Location Data</h1>
        <p className="">
          Using the GPS and user's location the Nishauri can provide relevant
          health info based on local health services and resources.
        </p>

        <br />
        <br />

        <h2>Emergency Services Locator</h2>
        <p>
          In case of emergencies, Nishauri can quickly provide information on
          nearby emergency services and hospitals.
        </p>
      </div>
      <div className="flex justify-between bg-[rgba(62,105,236,255)] h-[500px]">
        <div className="w-full">Social Media</div>
        <div className="w-full">About</div>
        <div className="w-full">Nishauri</div>
        <div className="w-full">Terms & Policies</div>
      </div>
    </div>
  );
}

export default LandingMain;
