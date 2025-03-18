import { NavLink } from 'react-router';

export function NavBar() {
  return (
    <nav className='container flex justify-between p-4'>
      <NavLink to='/' end>
        Home
      </NavLink>
      <NavLink to='/about' end>
        About
      </NavLink>
      <NavLink to='/projects' end>
        Projects
      </NavLink>
      <NavLink to='/contact' end>
        Contact
      </NavLink>
    </nav>
  );
}
