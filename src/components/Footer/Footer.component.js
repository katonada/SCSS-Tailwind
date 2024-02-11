import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>

			<div className={styles.footer__container}>

				<nav className={styles.footer__nav}>

					<ul className={styles.footer__list}>

						<li className={styles.footer__item}>
							<Link href="/scss" className={styles.footer__link}>SCSS</Link>
						</li>

						<li className={styles.footer__item}>
							<Link href="/tailwind-inline" className={styles.footer__link}>Tailwind Inline</Link>
						</li>

						<li className={styles.footer__item}>
							<Link href="/tailwind-apply" className={styles.footer__link}>Tailwind Apply</Link>
						</li>

						<li className={styles.footer__item}>
							<Link href="/scss-tailwind" className={styles.footer__link}>SCSS & Tailwind</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
