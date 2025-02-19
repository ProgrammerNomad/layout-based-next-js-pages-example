import Header from '../Header';

const MarketingLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <div className="bg-primary text-white py-5 mb-4">
          <div className="container">
            <h1 className="display-4">Welcome to Our Platform</h1>
            <p className="lead">Discover amazing features and possibilities</p>
          </div>
        </div>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MarketingLayout;