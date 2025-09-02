import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Tc from "./components/Tc";
import ContactPage from "./components/ContactPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-conditions" element={<Tc />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
