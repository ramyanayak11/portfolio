import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Connect from "./pages/Connect";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/connect" element={<Connect/>} />
        </Routes>
      </main>
    </div>
  );
}
