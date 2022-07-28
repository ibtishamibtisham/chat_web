import React from "react";
import { Box, Avatar } from "@mui/material";
import "./Sidebar.css";

export default function UserProfile({ name, photoURL }) {
  return (
    <div
      className="userprofile"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid lightgrey",
        cursor: "pointer",
      }}
    >
      <Box sx={{ size: "45px", display: "flex", gap: "10px" }}>
        <Avatar alt="Remy Sharp" src={photoURL} style={{ marginTop: "5px" }} />
        <div
          style={{
            textTransform: "capitalize",
            fontSize: "20px",
            textAlign: "left",
            height: "50px",
            marginTop: "12px",
          }}
        >
          <span>{name}</span>
        </div>
      </Box>
    </div>
  );
}
