// import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">My Next.js Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/scss" className="text-gray-600 hover:text-gray-900 transition-colors">SCSS</a></li>
            <li><a href="/tailwind-inline" className="text-gray-600 hover:text-gray-900 transition-colors">Tailwind Inline</a></li>
            <li><a href="/tailwind-apply" className="text-gray-600 hover:text-gray-900 transition-colors">Tailwind Apply</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
