import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./components/Score/Score";
import Zapped from "./components/Zapped/Zapped";
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

    <div className="page-container">
      <Header />
      <main>
        <Score />
        <Zapped />
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;

<LeaderBoard />;
