import Header from '../Header';
import Footer from '../Footer';

const BaseLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;