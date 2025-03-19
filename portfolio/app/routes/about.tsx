import type { Route } from './+types/home';
import { NavBar } from '~/components/NavBar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Page in Portfolio App' },
    { name: 'description', content: 'About Page of Portfolio App' },
  ];
}

export default function About() {
  return (
    <div className="flex flex-col items-center p-5">
      <NavBar />
      <h2 className="font-bold p-5">About</h2>
      <p>This is About Page</p>
    </div>
  );
}
