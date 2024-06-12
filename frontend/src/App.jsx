import { BrowserRouter, Route, Routes } from "react-router-dom";
import "regenerator-runtime/runtime";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
