import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import Home from "./View/Home/Index";
import DetailNotFound from "./View/Home/Component/NotFound";
import JobListing from "./View/Jobs/Index";
import Jobs from "./View/Jobs/Index";
import SplashScreen from "./View/Splash";
import SlotMachine from "./View/Game/Slot/Index";
import GameList from "./View/Game";
import "./Style/Animation.css"
import QuizApp from "./View/Game/Quiz/Index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/slot" element={<SlotMachine />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/game" element={<GameList />} />
          <Route path="*" element={<DetailNotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

//
