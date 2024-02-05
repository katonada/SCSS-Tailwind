import Container from '../components/Container';

export default function Page() {
    return (
        <Container>
            <div className="article__main">

                <article className="article">

                    <header className="article__header">

                        <h1 className="article__title">
                            Leveraging the Power of SCSS for Scalable and Maintainable CSS
                        </h1>

                        <img
                            className="article__image"
                            src="https://via.placeholder.com/1000x600"
                            alt="Tailwind CSS Image"
                        />
                    </header>

                    <section className="article__description">
                        Dive into the advantages of SCSS, a preprocessor scripting language that extends CSS with powerful features like variables, nesting, and mixins for a more organized and efficient styling workflow.
                    </section>

                    <section className="article__content">
                        <h2>
                            Introduction to SCSS
                        </h2>
                        <p>
                            SCSS, or Sassy CSS, introduces a versatile syntax that's compatible with all versions of CSS but elevates it with the addition of features that simplify and enhance the styling process. This preprocessor adds a robust layer of functionality, enabling developers to write more readable and maintainable code.
                        </p>
                        <p>
                            By utilizing SCSS, developers benefit from features such as variables for color values and font stacks, nesting selectors to reflect the HTML structure, and mixins for reusable sets of styles. This leads to a more strategic approach to styling, significantly reducing redundancy, and streamlining the management of complex stylesheets.
                        </p>
                    </section>

                    <footer className="article__footer">
                        <small className="article__footer_info">
                            Short content created with assistance from ChatGPT
                        </small>
                    </footer>
                </article>

                <aside className="article__aside">
                    <div className="article__aside_content">
                        <img
                            className="article__aside_content_image"
                            src="https://via.placeholder.com/300x600"
                            alt="Banner"
                        />
                    </div>
                </aside>
            </div>
        </Container>
    );
}
