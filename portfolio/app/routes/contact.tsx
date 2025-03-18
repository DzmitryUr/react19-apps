import { NavBar } from '~/components/Navbar';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Contact() {
  return (
    <div className='flex flex-col items-center p-5'>
      <NavBar />
      <h2>Contact</h2>
      <p>This is the Contact page</p>
    </div>
  );
}
