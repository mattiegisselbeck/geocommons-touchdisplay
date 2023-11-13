import React, { useState } from "react";
import { IconButton, ListItem, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// You can import ImageIcon if you want to use a generic image icon,
// or you can use custom images by setting the src attribute on Avatar.
import ImageIcon from '@mui/icons-material/Image';


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeFrame, setActiveFrame] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (frame) => {
    setActiveFrame(frame);
  };

  // Placeholder for image URLs
  const imageUrls = {
    generalLandUse: 'path/to/your/image1.png',
    frame2: 'path/to/your/image2.png',
    frame3: 'path/to/your/image3.png',
    frame4: 'path/to/your/image4.png',
    frame5: 'path/to/your/image5.png',
    // Add more if needed
  };

  return (
    <div
      // ... styles remain unchanged
    >
      <div
        // ... styles remain unchanged
      >
        <IconButton
          onClick={toggleSidebar}
          // ... styles remain unchanged
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {isSidebarOpen && (
        <div
          // ... styles remain unchanged
        >
          <ListItem button onClick={() => handleMenuItemClick('generalLandUse')}>
            <ListItemIcon>
              <Avatar alt="General Land Use" src={imageUrls.generalLandUse} />
            </ListItemIcon>
            <ListItemText primary="TMCA Generalized Land Use" />
          </ListItem>
          {/* Repeat the ListItem for other menu items with corresponding images */}
          <ListItem button onClick={() => handleMenuItemClick('frame2')}>
            <ListItemIcon>
              <Avatar alt="Analysis" src={imageUrls.frame2} />
            </ListItemIcon>
            <ListItemText primary="TMCA Analysis" />
          </ListItem>
          {/* ... more ListItems for frame3, frame4, frame5 */}
        </div>
      )}
      {/* iframe rendering based on activeFrame */}
      {activeFrame && (
        // ... iframe styles remain unchanged
      )}
    </div>
  );
};

export default Sidebar;
