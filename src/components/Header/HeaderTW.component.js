import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md py-4">

            <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">

                <h1 className="text-xl font-bold text-gray-900">SCSS & Tailwind</h1>

                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/scss" className="text-gray-600 hover:text-gray-900 transition-colors">SCSS</Link>
                        </li>
                        <li>
                            <Link href="/tailwind-inline" className="text-gray-600 hover:text-gray-900 transition-colors">Tailwind Inline</Link>
                        </li>
                        <li>
                            <Link href="/tailwind-apply" className="text-gray-600 hover:text-gray-900 transition-colors">Tailwind Apply</Link>
                        </li>
                        <li>
                            <Link href="/scss-tailwind" className="text-gray-600 hover:text-gray-900 transition-colors">SCSS & Tailwind</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
