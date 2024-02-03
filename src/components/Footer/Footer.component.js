// import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-4 mt-10">
      <div className="max-w-7xl mx-auto px-5">
        <nav>
          <ul className="flex justify-center space-x-6">
            <li><a href="/scss" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">SCSS</a></li>
            <li><a href="/tailwind-inline" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tailwind Inline</a></li>
            <li><a href="/tailwind-apply" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tailwind Apply</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
