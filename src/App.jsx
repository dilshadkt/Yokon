import React from "react";

import Home from "./pages/home/Home";
import WeOffer from "./components/WeOffer";
import OurStory from "./components/OurStory";
const App = () => {
  return (
    <div>
      <Home />
      <div className="bg-black">
        <WeOffer />
        <OurStory />
      </div>
    </div>
  );
};

export default App;
