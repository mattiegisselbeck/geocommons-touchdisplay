import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

export default App;
