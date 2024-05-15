import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import ChatContainer from "./ChatContainer";
import Inputbar from "./Inputbar";

function Main({ open }) {
  const [logout, setLogout] = useState(false);
  const [settings, setSettings] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const closeMenuRef = useRef();
  // const location = get

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history"));
    if (history.length > 0) {
      setMessages(history);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    function handleCloseMenuRef(event) {
      if (!closeMenuRef.current.contains(event.target)) {
        setSettings(false);
        setLogout(false);
      }
    }

    document.addEventListener("mousedown", handleCloseMenuRef);

    return () => {
      document.removeEventListener("mousedown", handleCloseMenuRef);
    };
  });

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView();
  // }, [messages]);

  // setMessages(JSON.parse(localStorage.getItem("history")));

  function getCurrentTimestamp() {
    const date = new Date();

    // Get day of the week (e.g., "WED")
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Convert hour to 12-hour format
    let hour = date.getHours() % 12;
    hour = hour === 0 ? 12 : hour; // Convert 0 to 12 for 12-hour format
    hour = hour < 10 ? "0" + hour : hour; // Add leading zero if needed

    // Add leading zero for single digit minutes
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    // Get AM or PM
    const period = date.getHours() >= 12 ? "PM" : "AM";

    // Return formatted timestamp
    return `${dayOfWeek} ${hour}:${minutes} ${period}`;
  }

  async function handleInput() {
    const userInput = document.getElementById("input").value;
    document.getElementById("input").value = "";

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: localStorage.getItem("user"),
        message: userInput,
        timestamp: getCurrentTimestamp(),
      },
    ]);
    setIsLoading(true);

    await fetch("http://127.0.0.1:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput, history: messages }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "AskNishauri",
              message: data.message,
              timestamp: getCurrentTimestamp(),
            },
          ]);
          // localStorage.removeItem("history");
          // localStorage.setItem("history", JSON.stringify(messages));
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      handleInput();
    }
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
        closeMenuRef={closeMenuRef}
      />

      {/* chat container */}
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      {/* input */}
      <Inputbar handleInput={handleInput} handleEnterKey={handleEnterKey} />
    </div>
  );
}

Main.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Main;
