import React from "react";
import { Container, Avatar, Box } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export function Sidebar() {
  return (
    <div style={{ width: "30%", maxWidth: "300px" }}>
      <Box
        sx={{
          display: "flex",
          background: "lightgrey",
          justifyContent: "space-around",
          width: "300px",
        }}
      >
        <Box>
          <Avatar alt="Remy Sharp" src="./user.png" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "150px",
            margin: "center",
          }}
        >
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </Box>
      </Box>
      <Box
        sx={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f6f6",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            border: "1px solid lightgrey",
            borderRadius: "5px",
          }}
        >
          <SearchIcon
            style={{ fontSize: "18px", color: "#acacac", marginLeft: "10px" }}
          />
          <input
            placeholder="Search..."
            style={{
              border: "none",
              background: "transparent",
              width: "80%",
              outline: "none",
            }}
          />
        </div>
      </Box>
    </div>
  );
}
