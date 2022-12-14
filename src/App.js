import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Brands from "./components/Brands";
import { Suspense } from "react";
import cookies from 'js-cookie'
import News from "./components/News";

function App() {

  // const currentLanguageCode = cookies.get('i18next') || 'fa';
  // console.log(currentLanguageCode)

  return (
    <Suspense fallback="loading...">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/news" element={<News />}/>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
