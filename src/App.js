import React, { useState } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainSection from "./Components/Body/MainSection";
import Hero from "./Components/Hero/Hero";
import PrimaryNav from "./Components/Navbar/PrimaryNav";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [openNotification, setOpenNotification] = useState(true);
  const closeHandler = () => {
    setOpenNotification(false);
  };

  return (
    <div className="App">
      <div className="fixed">
        {openNotification && <Topbar OnClick={closeHandler} />}
        <PrimaryNav />
      </div>
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
