import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./assets/global.css";
import data from "./data/data.json";

const AppContent = () => {
  const location = useLocation();
  const pageClass =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <div className={`page ${pageClass}`}>
      <Header />
      <main id={pageClass === "technology" ? "technology" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination data={data} />} />
          <Route path="/crew" element={<Crew data={data} />} />
          <Route path="/technology" element={<Technology data={data} />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
