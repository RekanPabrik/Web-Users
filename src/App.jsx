import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home_bf_login from "./pages/before-login/Home_bf_login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About_Us from "./pages/before-login/About_Us";
import Contact_Us from "./pages/before-login/Contact_Us";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_bf_login />} />
        <Route path="/aboutus" element={<About_Us />} />
        <Route path="/contactus" element={<Contact_Us />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
