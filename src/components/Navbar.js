import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="#about-me">About Me</NavLink>
      <NavLink to="#projects"> Projects</NavLink>
      <NavLink to="#skills"> Skills</NavLink>
      <NavLink to="#education"> Education</NavLink>
      <NavLink to="#contact"> Contact</NavLink>
    </div>
  )
}

export default Navbar;
