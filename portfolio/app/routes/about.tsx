import { NavBar } from '~/components/Navbar';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Portfolio App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='flex flex-col items-center p-5'>
      <NavBar />
      <h2>About</h2>
      <p>This is the About page. Here is some info about me</p>
    </div>
  );
}
