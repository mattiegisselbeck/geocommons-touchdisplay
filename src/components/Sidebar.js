import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeFrame, setActiveFrame] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (frame) => {
    setActiveFrame(frame);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isSidebarOpen && (
          <>
            <div style={{ fontSize: 13 }}>
              <br />
              <b>&nbsp;&nbsp;Comparing Land Use in the TMCA</b>
              <br />
              <br />
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => handleMenuItemClick('generalLandUse')}
              >
                &nbsp;&nbsp;TMCA Generalized Land Use
              </div>
              <br />
              {/* Additional menu items with onClick handlers */}
              {/* Add more divs with onClick here for other menu items */}
              {/* Each div should call handleMenuItemClick with a unique frame identifier */}
            </div>
          </>
        )}
      </div>
      {/* iframe rendering based on activeFrame */}
      {activeFrame && (
        <iframe
          src={activeFrame}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      )}
    </div>
  );
};

export default Sidebar;

