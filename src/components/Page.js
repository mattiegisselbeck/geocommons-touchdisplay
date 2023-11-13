import React from "react";
import Sidebar from "./Sidebar";

const Page = () => {
  return (
    <div style={{ flexGrow: 1, overflow: "hidden" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            transform: "translateX(0)",
            transition: "transform 0.5s",
          }}
        >
          <iframe
            height="100%"
            width="100%;"
            title="Minnesota Historic Land Use StoryMap"
            src="https://umn.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=0565ed7e8c674f519b386e43ceeedac7"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
