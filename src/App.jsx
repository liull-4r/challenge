import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css"; // Import global styles if needed
import Campaigns from "./pages/Campaigns";
import AbandonmentReport from "./pages/AbandonmentReport";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Dashboard Page */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/abandonment-report" element={<AbandonmentReport />} />
      </Routes>
    </Router>
  );
};

export default App;
