import Header from '../Header';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container-fluid flex-grow-1">
        <div className="row">
          <div className="col-md-3 col-lg-2 bg-light border-end p-3">
            <Sidebar />
          </div>
          <main className="col-md-9 col-lg-10 px-md-4 py-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;