import type { Route } from './+types/home';
import { NavBar } from '~/components/Navbar';

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
      <h2 className='font-bold p-5'>Home</h2>
      <p>Welcome to my Portfolio!</p>
    </div>
  );
}
