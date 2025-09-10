import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-kicker">portfolio</span>
        <h2>Ramya Nayak</h2>
      </div>

      <nav className="nav">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/work" className="nav-link">Work</NavLink>
        <NavLink to="/connect" className="nav-link">Connect</NavLink>
      </nav>

    </aside>
  );
}
