import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-white shadow-md py-4 mt-10">
			<div className="max-w-7xl mx-auto px-5">
				<nav>
					<ul className="flex justify-center space-x-6">
						<li><Link href="/scss" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">SCSS</Link></li>
						<li><Link href="/tailwind-inline" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tailwind Inline</Link></li>
						<li><Link href="/tailwind-apply" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tailwind Apply</Link></li>
						<li><Link href="/scss-tailwind" className="text-gray-600 hover:text-gray-900 transition-colors">SCSS & Tailwind</Link></li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
