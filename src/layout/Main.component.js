import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';
import Container from '../components/Container';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container> {children} </Container>
            <Footer />
        </>
    );
}
