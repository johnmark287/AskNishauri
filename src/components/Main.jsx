import { useState } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import ChatContainer from "./ChatContainer";
import Inputbar from "./Inputbar";

function Main({ open }) {
  const [logout, setLogout] = useState(false);
  const [settings, setSettings] = useState(false);

  function handleInput() {
    const userInput = document.getElementById("input").value;
    document.getElementById("input").value = "";
    fetch("http://127.0.0.1:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
        } else {
          console.log(data);
        }
      });
  }

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
      <Navbar
        logout={logout}
        setLogout={handleLogout}
        settings={settings}
        setSettings={handleSettings}
        open={open}
      />

      {/* chat container */}
      <ChatContainer />

      {/* input */}
      <Inputbar handleInput={handleInput} />
    
    </div>
  );
}

// Define propTypes for the bar component
Main.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Main;
