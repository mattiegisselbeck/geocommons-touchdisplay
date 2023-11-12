import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        width: isSidebarOpen ? "300px" : "40px",
        height: "100vh",
        position: "relative",
        top: 0,
        left: 0,
        backgroundColor: "#f0efee",
        boxShadow: isSidebarOpen ? "2px 0px 5px rgba(0, 0, 0, 0.2)" : "none",
        overflowX: "hidden",
        transition: "width 0.5s, background-color 0.5s, box-shadow 0.5s",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          left: isSidebarOpen ? "0" : `-250px`,
          zIndex: 1001,
          transition: "left 0.5s",
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            zIndex: 1001,
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {children}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isSidebarOpen && (
          <>
            <div style={{ fontSize: 24 }}>
              <br />
              <b>&nbsp;&nbsp;Gestures</b>
              <br />
              <br />
              &nbsp;&nbsp;✊ Pan map
              <br />
              <br />
              &nbsp;&nbsp;👍 Zoom out
              <br />
              <br />
              &nbsp;&nbsp;👎 Zoom in
              <br />
              <br />
              &nbsp;&nbsp;☝️ Return to home position
              <br />
              <br />
              &nbsp;&nbsp;✌️ Exit gesture recognition
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
