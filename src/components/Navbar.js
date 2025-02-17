import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="#about-me">About Me</NavLink>
      <NavLink className="nav-link" to="#projects"> Projects</NavLink>
      <NavLink className="nav-link" to="#skills"> Skills</NavLink>
      <NavLink className="nav-link" to="#education"> Education</NavLink>
      <NavLink className="nav-link" to="#contact"> Contact</NavLink>
    </nav>
  )
}

export default Navbar;
