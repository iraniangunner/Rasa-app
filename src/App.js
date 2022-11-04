import "./App.css";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/برند ها" element={} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
