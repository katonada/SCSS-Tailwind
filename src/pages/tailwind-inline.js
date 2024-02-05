import Container from '../components/Container';

export default function Page() {
    return (
        <Container>
            <div className="max-w-7xl mx-auto p-5 mt-10 mb-10 lg:grid lg:grid-cols-4 gap-5">

                <article className="lg:col-span-3 bg-white shadow-lg rounded-lg overflow-hidden">

                    <header className='mb-4'>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Exploring the Utility-First Paradigm in Tailwind CSS</h1>
                        <img className="w-full h-64 object-cover object-center" src="https://via.placeholder.com/1000x600" alt="Tailwind CSS Image"/>
                    </header>

                    <section className="p-4 font-bold text-base text-gray-600">
                        Discover the flexibility and efficiency of using Tailwind CSS, a highly customizable utility-first CSS framework that allows you to build designs directly in your markup.
                    </section>

                    <section className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900">Introduction to Tailwind</h2>
                        <p className="mt-4 text-base text-gray-600">
                            Tailwind CSS is revolutionizing the way developers write CSS by providing a set of utility classes that can be composed to create complex designs without leaving your HTML.
                        </p>
                        <p className="mt-4 text-base text-gray-600">
                            Instead of writing custom CSS styles, Tailwind allows for rapid UI development with its pre-defined classes. The utility-first approach minimizes the need to write custom CSS, thus speeding up the development process.
                        </p>
                    </section>

                    <footer className="mt-8 p-4">
                        <small className="text-sm text-gray-500">
                            Short content created with assistance from ChatGPT
                        </small>
                    </footer>
                </article>

                <aside className="lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden lg:mt-0 mt-5">
                    <div className="p-4 flex justify-center items-center h-[600px]">
                        <img src="https://via.placeholder.com/300x600" alt="Banner" className="w-full h-full object-cover object-center"/>
                    </div>
                </aside>
            </div>
        </Container>
    )
}
