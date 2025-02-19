import DashboardLayout from '../components/layouts/DashboardLayout';

function DashboardPage() {
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-6 col-xl-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text h2">1,234</p>
            </div>
          </div>
        </div>
        {/* Add more dashboard cards */}
      </div>
    </div>
  );
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;