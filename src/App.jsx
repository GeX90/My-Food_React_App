import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="main-container">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            
            <Route path="/item/:id" element={<ItemDetails />} />

            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;


