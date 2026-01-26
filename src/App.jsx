
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home";
import Gallary from "./pages/gallary";
import Contant from "./pages/contant";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    
    <ScrollToTop />
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallary" element={<Gallary />} />
      <Route path="/contant" element={<Contant />} />
    </Routes>
   

    </>
  );
}

export default App;
