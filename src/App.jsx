import "./App.css";
import About from "./Components/About";
import Careers from "./Components/Careers";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <section className="page-sectionn">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
