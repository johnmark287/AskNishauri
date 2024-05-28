import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
// import PropTypes from "prop-types";
import ChatContainer from "./ChatContainer";
import Inputbar from "./Inputbar";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import FollowUps from "./FollowUps";

function Main() {
  const [logout, setLogout] = useState(false);
  const [settings, setSettings] = useState(false);
  const [messages, setMessages] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const closeSettingsRef = useRef();
  const closeLogoutRef = useRef();
  const {
    text,
    setText,
    isListening,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  useEffect(() => {
    function handleCloseLogoutRef(event) {
      if (!closeLogoutRef.current.contains(event.target)) {
        setLogout(false);
      }
    }
    document.addEventListener("mousedown", handleCloseLogoutRef);

    return () => {
      document.removeEventListener("mousedown", handleCloseLogoutRef);
    };
  });

  useEffect(() => {
    function handleCloseSettingsRef(event) {
      if (!closeSettingsRef.current.contains(event.target)) {
        setSettings(false);
      }
    }

    document.addEventListener("mousedown", handleCloseSettingsRef);

    return () => {
      document.removeEventListener("mousedown", handleCloseSettingsRef);
    };
  });

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


  function getCurrentTimestamp() {
    const date = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    let hour = date.getHours() % 12;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${dayOfWeek} ${hour}:${minutes} ${period}`;
  }

  async function sendMessage(userInput) {
    if (userInput === "") {
      console.log("Empty input");
      return;
    }
    setText("");

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
      body: JSON.stringify({
        message: userInput,
        details: JSON.parse(localStorage.getItem("details")),
        history: messages.slice().reverse(),
        time: getCurrentTimestamp(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "Nishauri",
              message: data.message,
              timestamp: getCurrentTimestamp(),
            },
          ]);
          setQuestions(data.followUps);
          let utterance = new SpeechSynthesisUtterance("Hello world");
          speechSynthesis.speak(utterance);
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

  function handleInput() {
    const userInput = document.getElementById("input").value;
    sendMessage(userInput);
    setQuestions([]);
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      handleInput();
    }
  }

  function handleFollowUpClick(question) {
    sendMessage(question);
    setQuestions([])
  }

  function handleLogout() {
    setLogout(!logout);
  }

  function handleSettings() {
    setSettings(!settings);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
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
        closeSettingsRef={closeSettingsRef}
        closeLogoutRef={closeLogoutRef}
      />

      {/* chat container */}
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      {/* input */}
      <Inputbar
        handleInput={handleInput}
        handleEnterKey={handleEnterKey}
        isLoading={isLoading}
        text={text}
        setText={setText}
        isListening={isListening}
        startListening={startListening}
        stopListening={stopListening}
      >
        <FollowUps questions={questions} onQuestionClick={handleFollowUpClick} />
      </Inputbar>
    </div>
  );
}

// Main.propTypes = {
//   open: PropTypes.bool.isRequired,
// };

export default Main;
