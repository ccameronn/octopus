import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/HomePage";

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

// <LeaderBoard />
