import { useState } from "react";
import Navbar from "./Navbar";

function Main() {
  const [logout, setLogout] = useState(false);

  function handleLogout() {
    setLogout(!logout);
  }
  return (
    <div className="bg-[rgba(29,31,34,255)] w-full">
      <Navbar logout={logout} setLogout={handleLogout} />
      <div className="">
        Main
      </div>
    </div>
  );
}

export default Main;
