import { NavLink } from 'react-router';

export function NavBar() {
  return (
    <nav className="container flex justify-between p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
