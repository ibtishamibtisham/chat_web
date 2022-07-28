import React from "react";
import ChatContainer from "./ChatContainer";
import { Sidebar } from "./Sidebar";
import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
}
