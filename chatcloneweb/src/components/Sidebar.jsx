import React from "react";
import { Container, Avatar, Box } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import UserProfile from "./UserProfile";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img src="./user.png" alt="" />
        </div>
        <div className="sidebar-header-btn">
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <SearchIcon />
          <input type="text" name="search" placeholder="Search..." />
        </div>
      </div>

      <div className="sidebar-chat-list">
        <UserProfile name="hello" photoURL="./user.png" />
      </div>
    </div>
  );
}
