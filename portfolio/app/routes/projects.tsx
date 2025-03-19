import type { Route } from './+types/home';
import { NavBar } from '~/components/NavBar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Projects Page in Portfolio App' },
    { name: 'description', content: 'Projects Page of Portfolio App' },
  ];
}

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-5">
      <NavBar />
      <h2 className="font-bold p-5">Projects</h2>
      <p>This is Projects Page</p>
    </div>
  );
}
