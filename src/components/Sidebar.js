import React, { useState } from "react";
import { IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// Import additional icons here
import LandscapeIcon from '@mui/icons-material/Landscape';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PlaceIcon from '@mui/icons-material/Place';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';

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
      {isSidebarOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: 13,
            paddingLeft: '10px' // padding inside the sidebar
          }}
        >
          <ListItem button onClick={() => handleMenuItemClick('generalLandUse')}>
            <ListItemIcon>
              <LandscapeIcon />
            </ListItemIcon>
            <ListItemText primary="TMCA Generalized Land Use" />
          </ListItem>
          {/* Additional menu items with icons */}
          <ListItem button onClick={() => handleMenuItemClick('frame2')}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="TMCA Analysis" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('frame3')}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="TMCA Locations" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('frame4')}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="TMCA Mapping" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('frame5')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="TMCA Information" />
          </ListItem>
        </div>
      )}
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

