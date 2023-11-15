import "./App.css";
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
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
