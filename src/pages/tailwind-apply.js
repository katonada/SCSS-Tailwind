import Container from '../components/Container';

import styles from './../styles/ArticleTW.module.scss';

export default function Page() {
    return (
        <Container>
            <div className={styles.article__main}>

                <article className={styles.article}>

                    <header className={styles.article__header}>

                        <h1 className={styles.article__title}>
                            Exploring the Utility-First Paradigm in Tailwind CSS using @apply
                        </h1>

                        <img
                            className={styles.article__image}
                            src="https://via.placeholder.com/1000x600"
                            alt="Tailwind CSS Image"
                        />
                    </header>

                    <section className={styles.article__description}>
                        Discover the flexibility and efficiency of using Tailwind CSS, a highly customizable utility-first CSS framework that allows you to build designs directly in your markup.
                    </section>

                    <section className={styles.article__content}>
                        <h2>
                            Introduction to Tailwind
                        </h2>
                        <p>
                            Tailwind CSS is revolutionizing the way developers write CSS by providing a set of utility classes that can be composed to create complex designs without leaving your HTML.
                        </p>
                        <p>
                            Instead of writing custom CSS styles, Tailwind allows for rapid UI development with its pre-defined classes. The utility-first approach minimizes the need to write custom CSS, thus speeding up the development process.
                        </p>
                    </section>

                    <footer className={styles.article__footer}>
                        <small className={styles.article__footer_info}>
                            Published on 02. 02. 2024.
                        </small>
                    </footer>
                </article>

                <aside className={styles.article__aside}>
                    <div className={styles.article__aside_content}>
                        <img
                            className={styles.article__aside_content_image}
                            src="https://via.placeholder.com/300x600"
                            alt="Banner"
                        />
                    </div>
                </aside>
            </div>
        </Container>
    );
}
