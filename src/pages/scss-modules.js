import Container from '../components/Container';

import styles from './../styles/Article.module.scss';

export default function Page() {
    return (
        <Container>
            <div className={styles.article__main}>

                <article className={styles.article}>

                    <header className={styles.article__header}>

                        <h1 className={styles.article__title}>
                            Mastering Component-Scoped Styles with S/CSS Modules
                        </h1>

                        <img
                            className={styles.article__image}
                            src="https://via.placeholder.com/1000x600"
                            alt="Tailwind CSS Image"
                        />
                    </header>

                    <section className={styles.article__description}>
                        Gain insight into S/CSS Modules and how they offer a unique solution to the scoped styling challenge in modern web development, ensuring that styles are localized to components without the risk of global side effects.
                    </section>

                    <section className={styles.article__content}>
                        <h2>
                            The Basics of S/CSS Modules
                        </h2>
                        <p>
                            S/CSS Modules provide a way to encapsulate styles per component, fortifying the modular architecture of contemporary front-end frameworks. By binding styles to the components they belong to, CSS Modules help in maintaining a clean and conflict-free codebase.
                        </p>
                        <p>
                            The encapsulation of S/CSS Modules means that class names are scoped locally by default, not globally. This reduces the risk of naming conflicts and enhances the reusability and maintainability of components across large-scale applications.
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
