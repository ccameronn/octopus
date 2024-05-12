import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./components/Score/Score";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <div className="container">
    //     <Header />
    //     <main>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;

<LeaderBoard />;
