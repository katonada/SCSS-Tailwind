import Header from '../components/Header/HeaderTW.component';
import Footer from '../components/Footer/FooterTW.component';
import Container from '../components/Container';

export default function LayoutTW({ children }) {
    return (
        <>
            <Header />
            <Container> {children} </Container>
            <Footer />
        </>
    );
}
