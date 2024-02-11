import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header__container}>

                <h1 className={styles.header__title}>SCSS and Tailwind CSS: A Unified Strategy</h1>

                <nav className={styles.header__nav}>

                    <ul className={styles.header__list}>

                        <li className={styles.header__item}>
                            <Link href="/scss" className={styles.header__link}>SCSS</Link>
                        </li>

                        <li className={styles.header__item}>
                            <Link href="/tailwind-inline" className={styles.header__link}>Tailwind Inline</Link>
                        </li>

                        <li className={styles.header__item}>
                            <Link href="/tailwind-apply" className={styles.header__link}>Tailwind Apply</Link>
                        </li>

                        <li className={styles.header__item}>
                            <Link href="/scss-tailwind" className={styles.header__link}>SCSS & Tailwind</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
