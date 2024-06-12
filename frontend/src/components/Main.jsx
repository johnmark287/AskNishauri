import { useEffect, useRef, useState, useMemo } from "react";
import Navbar from "./Navbar";
// import PropTypes from "prop-types";
import ChatContainer from "./ChatContainer";
import Inputbar from "./Inputbar";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import FollowUps from "./FollowUps";
import axios from "axios";
import { marked } from "marked";
import { useSpeech } from "react-text-to-speech";

function Main() {
  const [logout, setLogout] = useState(false);
  const [settings, setSettings] = useState(false);
  const [messages, setMessages] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [coordinates, setCoorditates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [location, setLocation] = useState("");

  const messagesEndRef = useRef(null);
  const closeSettingsRef = useRef();
  const closeLogoutRef = useRef();
  const {
    text,
    setText,
    usedVoice,
    setUsedVoice,
    isListening,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  const [txt, setTxt] = useState("");
  const { start } = useSpeech({
    text: useMemo(() => txt, [txt]),
  });

  useEffect(() => {
    if (txt) {
      // start();
    }
  }, [txt]);

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
    const follow = JSON.parse(localStorage.getItem("followups"));
    if (history.length > 0) {
      setMessages(history);
      setQuestions(follow);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(messages));
    localStorage.setItem("followups", JSON.stringify(questions));
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
    const startTime = Date.now();
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
          const endTime = Date.now();
          const totalTime = endTime - startTime; // Calculate the total time taken

          console.log(`Total time taken for the response: ${totalTime}ms`);

          const regex =
            /\*\*Nishauri:\*\*|\*\*Response 1:\*\*|\*\*Response 2:\*\*|\*\*Assistant:\*\*|\*\*Better Response:\*\*/g;
          setTxt(data.message.replace(regex, ""));
          // Text.value = data.message.replace(/[*]?/gm, ""),
          // console.log(txt);
          // start();
          // let utterance = new SpeechSynthesisUtterance("Hello world");
          // speechSynthesis.speak(utterance);
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
        setUsedVoice(false);
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
    setQuestions([]);
  }

  function handleLogout() {
    setLogout(!logout);
  }

  function handleSettings() {
    setSettings(!settings);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoorditates({ latitude, longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // const getGeocode = async () => {
  //   const apiKey = "f796cb79aba840da993f38af94f8cb5f"; // Replace with your actual API key
  //   const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+${coordinates.longitude}&key=${apiKey}`;

  //   try {
  //     const response = await axios.get(geocodeUrl);
  //     const results = response.data.results;
  //     if (results.length > 0) {
  //       // console.log(results[0]);
  //       setLocation(results[0].formatted);
  //       // console.log(location);
  //     } else {
  //       setLocation("No address found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching geocode:", error);
  //     setLocation("Error fetching address");
  //   }
  // };

  // useEffect(() => {
  //   // Geocode only if both longitude and latitude are entered
  //   // if (coordinates.longitude !== 0 && coordinates.latitude !== 0) {
  //   getGeocode();
  //   // }
  // });

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
        <FollowUps
          questions={questions}
          onQuestionClick={handleFollowUpClick}
        />
      </Inputbar>
    </div>
  );
}

// Main.propTypes = {
//   open: PropTypes.bool.isRequired,
// };

export default Main;
