import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [iframeUrl, setIframeUrl] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (url) => {
    setIframeUrl(url);
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
              <b>&nbsp;&nbsp;Menu</b>
              <br />
              <br />
              <button onClick={() => handleMenuClick('https://example.com/page1')}>Page 1</button>
              <br />
              <button onClick={() => handleMenuClick('https://example.com/page2')}>Page 2</button>
              <br />
              <button onClick={() => handleMenuClick('https://example.com/page3')}>Page 3</button>
              <br />
              {/* Add more menu items as needed */}
            </div>
          </>
        )}
      </div>
      {iframeUrl && (
        <iframe src={iframeUrl} style={{ width: '100%', height: '100vh' }} title="content" />
      )}
    </div>
  );
};

export default Sidebar;

