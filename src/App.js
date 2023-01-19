import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div class="container">
        <Sidebar />

        <div class="main">
          <Main />
        </div>
        <Rightbar />
      </div>
    </>
  );
}

export default App;
