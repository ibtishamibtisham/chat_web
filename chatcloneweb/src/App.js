import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
