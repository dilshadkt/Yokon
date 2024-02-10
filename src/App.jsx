import React from "react";

import Home from "./pages/home/Home";
import WeOffer from "./components/WeOffer";
import OurStory from "./components/OurStory";
import SpecialDish from "./components/SpecialDish";
import Menu from "./components/Menu";
import WhychooseUs from "./components/WhychooseUs";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Home />
      <div className="bg-black">
        <WeOffer />
        <OurStory />
        <SpecialDish />
        <Menu />
        <WhychooseUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
