import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home_bf_login from "./pages/before-login/Home_bf_login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_bf_login/>} />
      </Routes>
    </div>
  );
}

export default App;
