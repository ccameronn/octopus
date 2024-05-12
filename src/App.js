import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./components/Score/Score";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <main>
          <Score />
          <LeaderBoard />
        </main>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;

// <LeaderBoard />
