import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

// Optional: Add PropTypes validation
// import PropTypes from 'prop-types';
// MainLayout.propTypes = {
//     children: PropTypes.node.isRequired
// };

export default MainLayout;