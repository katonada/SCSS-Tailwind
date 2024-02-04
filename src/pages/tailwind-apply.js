import Container from '../components/Container';

import styles from './../styles/TwApply.module.scss';

export default function Page() {
    return (
        <Container>
            <div className={styles.pageContainer}>
                <div className={styles.pageGrid}>
                    <article className={styles.pageArticle}>
                        <header className={styles.pageArticle__header}>
                            <h1 className={styles.pageArticle__header__title}>
                                Exploring the Utility-First Paradigm in Tailwind CSS
                            </h1>
                            <img
                                className={styles.pageArticle__header__image}
                                src="https://via.placeholder.com/1000x600"
                                alt="Tailwind CSS Image"
                            />
                        </header>

                        <section className={styles.pageArticle__section}>
                            <p className={styles.pageArticle__section__paragraph}>
                                Discover the flexibility and efficiency of using Tailwind CSS, a highly customizable utility-first CSS framework that allows you to build designs directly in your markup.
                            </p>
                        </section>

                        <section className={styles.pageArticle__section}>
                            <h2 className={styles.pageArticle__section__title}>
                                Introduction to Tailwind
                            </h2>
                            <p className={styles.pageArticle__section__paragraph}>
                                Tailwind CSS is revolutionizing the way developers write CSS...
                            </p>
                            <p className={styles.pageArticle__section__paragraph}>
                                Instead of writing custom CSS styles...
                            </p>
                        </section>

                        <footer className={styles.pageArticle__footer}>
                            <small className={styles.pageArticle__footer__info}>
                                Published on April 15, 2023
                            </small>
                        </footer>
                    </article>

                    <aside className={styles.pageAside}>
                        <div className={styles.pageAside__content}>
                            <img
                                className={styles.pageAside__content__image}
                                src="https://via.placeholder.com/300x600"
                                alt="Banner"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </Container>
    );
}
