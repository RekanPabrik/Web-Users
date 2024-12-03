import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home_bf_login from "./pages/before-login/Home_bf_login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_bf_login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
