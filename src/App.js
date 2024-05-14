import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Home from "./pages/HomePage/HomePage";
import Zapped from "./components/Zapped/Zapped";
import Score from "./components/Score/Score";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    // <BrowserRouter>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <main>
          <Score />
          <LeaderBoard />
          <Zapped />
        </main>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;

// <LeaderBoard />

// <LeaderBoard />
