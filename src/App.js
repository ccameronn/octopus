import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/HomePage";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <LeaderBoard />
      <Routes></Routes>
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
