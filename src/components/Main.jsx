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
    <div className="bg-[rgba(29,31,34,255)] w-full">
      <Navbar logout={logout} setLogout={handleLogout} settings={settings} setSettings={handleSettings} open={open} />
      <div className="">Main</div>
    </div>
  );
}

// Define propTypes for the bar component
Main.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Main;
