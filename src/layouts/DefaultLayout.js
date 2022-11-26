import ProductViewModal from '~/components/ProductViewModal';
import Footer from './components/Footer';
import Header from './components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">{children}</div>
            </div>
            <Footer />
            <ProductViewModal />
        </div>
    );
}

export default DefaultLayout;
