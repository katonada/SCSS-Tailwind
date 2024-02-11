import Layout from '../layout/Main.component';

import styles from './../styles/Article.module.scss';

export default function Page() {
    return (
        <Layout>
            <div className={styles.article}>

                <article className={styles.article__main}>

                    <header className={styles.article__header}>

                        <h1 className={styles.article__title}>
                            Harmonizing SCSS with Tailwind CSS for Superior Styling Strategies
                        </h1>

                        <img
                            className={styles.article__image}
                            src="https://via.placeholder.com/1000x600"
                            alt="Tailwind CSS Image"
                        />
                    </header>

                    <section className={styles.article__description}>
                        Explore the synergetic approach of integrating SCSS with Tailwind CSS in your projects to capitalize on the strengths of both preprocessing and utility-first styling.
                    </section>

                    <section className={styles.article__content}>

                        <h2>
                            Combining Forces: SCSS and Tailwind CSS
                        </h2>
                        <p>
                            Merging SCSS with Tailwind CSS brings together the best of both worlds: the dynamism of preprocessor features and the convenience of utility-first classes.
                        </p>
                        <p>
                            The combination facilitates the creation of custom Tailwind utility classes within SCSS files, allowing for the extension of Tailwind's default palette and the inclusion of complex theming that leverages SCSS's logic capabilities.
                        </p>

                        <h2>
                            Benefits of Blending SCSS and Tailwind
                        </h2>
                        <p>
                            This integration offers a high degree of customization, efficient theming management, and the ability to use Tailwind's responsive modifiers alongside SCSS logic.
                        </p>
                        <p>
                            Design tokens such as colors, typography, and spacing can be managed through SCSS variables and then applied using Tailwind classes.
                        </p>

                        <h2>
                            Caveats to Consider
                        </h2>
                        <p>
                            The melding of SCSS with Tailwind CSS can lead to a steeper learning curve and the potential for bloating the final CSS bundle.
                        </p>
                        <p>
                            Ensuring a build process that correctly compiles SCSS into CSS before applying Tailwind's utility classes is crucial.
                        </p>

                        <h2>
                            Advanced Customization Strategies
                        </h2>
                        <p>
                            For advanced theming, SCSS custom functions and mixins can work with Tailwind's @apply directive.
                        </p>
                        <p>
                            SCSS's extend and placeholder selectors can be used to inject common styles into Tailwind classes for an optimized final output.
                        </p>

                        <h2>
                            Conclusion
                        </h2>
                        <p>
                            Utilizing SCSS with Tailwind CSS requires a deliberate approach but offers unmatched efficiency and control for prototyping and production.
                        </p>
                    </section>

                    <footer className={styles.article__footer}>
                        <small className={styles.article__footer_info}>
                            Short content created with assistance from ChatGPT
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
        </Layout>
    );
}
