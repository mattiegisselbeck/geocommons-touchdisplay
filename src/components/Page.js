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
            scrolling="no"
            title="Gesture Map Control"
            src="https://codepen.io/Luke-Zaruba/embed/preview/YzdrryL?default-tab=result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
            allow="camera"
          >
            See the Pen{" "}
            <a href="https://codepen.io/Luke-Zaruba/pen/YzdrryL">
              Gesture Map Control
            </a>{" "}
            by Luke Zaruba (
            <a href="https://codepen.io/Luke-Zaruba">@Luke-Zaruba</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
