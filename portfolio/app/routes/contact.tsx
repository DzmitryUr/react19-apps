import type { Route } from './+types/home';
import { NavBar } from '~/components/NavBar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Page in Portfolio App' },
    { name: 'description', content: 'Contact Page of Portfolio App' },
  ];
}

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-5">
      <NavBar />
      <h2 className="font-bold p-5">Contact</h2>
      <p>This is Contact Page</p>
    </div>
  );
}
